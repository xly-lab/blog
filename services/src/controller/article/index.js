const sequelize = require('sequelize');
const xss = require('xss');
const Article = require('../../init/sql/models/article');
const Tag = require('../../init/sql/models/tag');
const Comment = require('../../init/sql/models/comment');
const validateArticle = require('./article.validate');
const makeSlug = require('./article.utils');
const User = require('../../init/sql/models/user');

// 创建文章
const createArticles = async (req, res) => {
  const UserEmail = req?.authorizedEmail || '';
  const { title = '', description = '', body = '', tags = [] } = req?.body || {};
  const { result, errMsg } = validateArticle({ title, description, body });
  if (!result) {
    res.status(401).json({
      coed: 0,
      message: String(Object.values(errMsg)),
    });
  }
  const slug = makeSlug();

  try {
    const createResult = await Article.create({
      slug,
      title,
      description: xss(description),
      body: xss(body),
      UserEmail,
    });

    for (const name of tags) {
      const existTag = await Tag.findByPk(name);
      if (!existTag) {
        Tag.create({ name });
      }
      await createResult.addTag(name);
    }

    if (createResult) {
      const successArticle = await Article.findByPk(slug, { include: Tag });
      const Tags = successArticle?.Tags?.map((item) => item.name);
      res.status(200).json({
        code: 1,
        message: '文章创建成功',
        data: { ...successArticle.dataValues, Tags },
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 0,
      message: '内部异常:' + error.message,
    });
  }
};

// 更新文章
const updateArticle = async (req, res) => {
  const email = req?.authorizedEmail || '';
  const { title = '', description = '', body = '', tags = [], slug } = req?.body || {};
  const { result, errMsg } = validateArticle({ title, description, body });
  if (!result) {
    res.status(401).json({
      coed: 0,
      message: String(Object.values(errMsg)),
    });
  }
  try {
    const findResult = await Article.findByPk(slug, {
      include: Tag,
    });
    if (email !== findResult.UserEmail) {
      res.status(401).json({
        code: 0,
        message: '你不是当前文章作者，无法修改',
      });
      return;
    }
    if (!findResult) {
      res.status(404).json({
        code: 0,
        message: '所更新文章不存在',
      });
      return;
    }
    const updateResult = await findResult.update({ tags, title, description: xss(description), body: xss(body) });
    // 标签处理
    // 1 删除没有的标签
    for (const name of findResult?.Tags?.map((item) => item.name)) {
      await updateResult.removeTag(name);
    }
    // 2 重新关联文章对应的标签
    for (const name of tags) {
      const existTag = await Tag.findByPk(name);
      if (!existTag) {
        Tag.create({ name });
      }
      await updateResult.addTag(name);
    }

    if (updateResult) {
      const successArticle = await Article.findByPk(slug, { include: Tag });
      const Tags = successArticle?.Tags?.map((item) => item.name);
      res.status(200).json({
        code: 1,
        message: '文章创建成功',
        data: { ...successArticle.dataValues, Tags },
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 0,
      message: '内部异常:' + error.message,
    });
  }
};

// 获取多篇文章
const getMoreArticles = async (req, res) => {
  const { title = '', limit = 10, offset = 0 } = req.body;
  const findConditions = Object.assign(
    {
      limit: Number(limit),
      offset: Number(offset),
      include: Tag,
      attributes: {
        exclude: ['body'],
      },
      distinct: true,
    },
    title && {
      where: {
        title: {
          [sequelize.Op.like]: `%${title}%`,
        },
      },
    }
  );
  try {
    const findResult = await Article.findAndCountAll(findConditions);
    const total = findResult.count;
    const articles = [];
    for (let article of findResult?.rows || {}) {
      const { slug = '' } = article;
      const comments = await Comment.findAndCountAll({
        where: { ArticleSlug: slug },
      });
      article = {
        ...article.dataValues,
        Tags: article?.Tags?.map((tag) => tag.name) || [],
        comments_count: comments.count ?? 0,
      };
      articles.push(article);
    }
    res.status(200).json({
      code: 1,
      message: 'success',
      data: {
        total,
        articles,
        limit: Number(limit),
        offset: Number(offset),
      },
    });
  } catch (error) {
    res.status(500).json({
      code: 0,
      message: '内部异常:' + error.message,
    });
  }
};

// 获取单个文章
const getArticle = async (req, res) => {
  const { slug = '' } = req.body;
  try {
    const findResult = await Article.findByPk(slug);
    if (!findResult) {
      res.status(404).json({
        code: 0,
        message: '文章不存在',
      });
      return;
    }
    res.status(200).json({
      code: 1,
      message: 'ok',
      data: findResult,
    });
  } catch (error) {
    res.status(500).json({
      code: 0,
      message: '内部异常:' + error.message,
    });
  }
};

// 获取作者的相关文章
const getOwnerArticles = async (req, res) => {
  const { email = '', username = '', limit = 10, offset = 0 } = req.body;
  try {
    const findResult =
      (await User.findByPk(email)) ||
      (await User.findOne({
        where: {
          username,
        },
      }));
    if (!findResult) {
      res.status(401).json({
        code: 0,
        message: '当前作者不存在',
      });
      return;
    }

    const articleResult = await Article.findAndCountAll({
      where: {
        UserEmail: findResult.email,
      },
      distinct: true,
      limit: Number(limit),
      offset: Number(offset),
      include: Tag,
      attributes: {
        exclude: ['body'],
      },
    });
    const total = articleResult?.count ?? 0;
    const articles = [];
    for (let article of articleResult?.rows || {}) {
      const { slug = '' } = article;
      const comments = await Comment.findAndCountAll({
        where: { ArticleSlug: slug },
      });
      article = {
        ...article.dataValues,
        Tags: article?.Tags?.map((tag) => tag.name) || [],
        comments_count: comments.count ?? 0,
      };
      articles.push(article);
    }
    res.status(200).json({
      code: 0,
      message: '获取当前用户文章成功',
      data: {
        total,
        articles,
        limit: Number(limit),
        offset: Number(offset),
      },
    });
  } catch (error) {
    res.status(500).json({
      code: 0,
      message: '内部异常:' + error.message,
    });
  }
};

module.exports = {
  getMoreArticles,
  createArticles,
  getArticle,
  getOwnerArticles,
  updateArticle,
};
