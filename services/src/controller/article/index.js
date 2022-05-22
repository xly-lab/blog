const sequelize = require('sequelize');
const xss = require('xss');
const Article = require('../../init/sql/models/article');
const Tag = require('../../init/sql/models/tag');
const Comment = require('../../init/sql/models/comment');
const User = require('../../init/sql/models/user');
const validateArticle = require('./article.validate');
const makeSlug = require('./article.utils');
const sequelizeModel = require('../../init/sql/sequelize');

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
  const { title = '', description = '', body = '', tags = [], slug = '' } = req?.body || {};
  const { result, errMsg } = validateArticle({ title, description, body });
  if (!result) {
    res.status(401).json({
      coed: 0,
      message: String(Object.values(errMsg)),
    });
  }
  try {
    const article = await Article.findByPk(slug, {
      include: Tag,
    });
    if (!article) {
      res.status(404).json({
        code: 0,
        message: '所更新文章不存在',
      });
      return;
    }
    if (email !== article?.UserEmail) {
      res.status(401).json({
        code: 0,
        message: '你不是当前文章作者，无法修改',
      });
      return;
    }

    const updateResult = await article.update({ tags, title, description: xss(description), body: xss(body) });
    // 标签处理
    // 1 删除没有的标签
    for (const name of article?.Tags?.map((item) => item.name)) {
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
      const comments = await Comment.findAndCountAll({
        where: { ArticleSlug: successArticle.slug },
      });
      const Tags = successArticle?.Tags?.map((item) => item.name);
      res.status(200).json({
        code: 1,
        message: '文章创建成功',
        data: {
          ...successArticle.dataValues,
          Tags,
          comments_count: comments.count ?? 0,
          like_count: await successArticle.countUsers(),
        },
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 0,
      message: '内部异常:' + error.message,
    });
  }
};

// 删除文章
const deleteArticle = async (req, res) => {
  const email = req?.authorizedEmail || '';
  const { slug = '' } = req?.body || {};
  try {
    const article = await Article.findByPk(slug);
    if (!article) {
      res.status(404).json({
        code: 0,
        message: '所删除文章不存在',
      });
      return;
    }
    if (email !== article.UserEmail) {
      res.status(401).json({
        code: 0,
        message: '你不是当前文章作者，无法修改',
      });
      return;
    }
    await article.destroy();
    res.status(200).json({
      code: 1,
      message: '删除成功',
    });
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
    const moreArticles = await Article.findAndCountAll(findConditions);
    const total = moreArticles.count;
    const articles = [];
    for (let article of moreArticles?.rows || {}) {
      const { slug = '' } = article;
      const comments = await Comment.findAndCountAll({
        where: { ArticleSlug: slug },
      });
      article = {
        ...article.dataValues,
        Tags: article?.Tags?.map((tag) => tag.name) || [],
        comments_count: comments.count ?? 0,
        like_count: await article.countUsers(),
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
    const article = await Article.findByPk(slug);
    if (!article) {
      res.status(404).json({
        code: 0,
        message: '文章不存在',
      });
      return;
    }
    const comments = await Comment.findAndCountAll({
      where: { ArticleSlug: article.slug },
    });
    res.status(200).json({
      code: 1,
      message: 'ok',
      data: {
        ...article.dataValues,
        comments_count: comments.count ?? 0,
        like_count: await article.countUsers(),
      },
    });
  } catch (error) {
    res.status(500).json({
      code: 0,
      message: '内部异常:' + error.message,
    });
  }
};

// 获取作者的相关文章
const getAuthorArticles = async (req, res) => {
  const { email = '', username = '', limit = 10, offset = 0 } = req.body;
  try {
    const user = await User.findOne({
      where: {
        [sequelize.Op.or]: { email, username },
      },
    });
    if (!user) {
      res.status(401).json({
        code: 0,
        message: '当前作者不存在',
      });
      return;
    }
    const articleResult = await Article.findAndCountAll({
      attributes: {
        exclude: ['body'],
      },
      where: {
        UserEmail: user.email,
      },
      distinct: true,
      limit: Number(limit),
      offset: Number(offset),
      include: Tag,
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
        like_count: await article.countUsers(),
      };
      articles.push(article);
    }
    res.status(200).json({
      code: 1,
      message: '获取当前作者文章成功',
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

// 获取所喜欢的文章
const getFavoriteArticles = async (req, res) => {
  const { email = '', username = '', limit = 10, offset = 0 } = req.body;
  try {
    const user = await User.findOne({
      where: {
        [sequelize.Op.or]: { email, username },
      },
    });
    if (!user) {
      res.status(401).json({
        code: 0,
        message: '当前作者不存在',
      });
      return;
    }
    const sql = `SELECT ArticleSlug from favorites WHERE UserEmail = '${user?.email}'`;

    const allArticleSlugs = (await sequelizeModel.query(sql, { type: sequelize.QueryTypes.SELECT })) || [];

    const allFavoriteArticles = await Article.findAndCountAll({
      attributes: {
        exclude: ['body'],
      },
      where: {
        [sequelize.Op.or]: allArticleSlugs.map((article) => ({ slug: article.ArticleSlug })),
      },
      limit: Number(limit),
      offset: Number(offset),
      distinct: true,
    });
    const articles = [];
    for (const article of allFavoriteArticles?.rows) {
      const { slug = '' } = article;
      const comments = await Comment.findAndCountAll({
        where: { ArticleSlug: slug },
      });
      articles.push({
        ...(article?.dataValues || {}),
        comments_count: comments.count ?? 0,
        like_count: await article.countUsers(),
      });
    }

    res.status(200).json({
      code: 0,
      message: '获取所关注的作者文章成功',
      data: {
        total: allFavoriteArticles.count ?? 0,
        articles,
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
  getAuthorArticles,
  updateArticle,
  deleteArticle,
  getFavoriteArticles,
};
