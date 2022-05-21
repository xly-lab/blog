const sequelize = require('sequelize');
const Article = require('../../init/sql/models/article');
const Tag = require('../../init/sql/models/tag');
const Comment = require('../../init/sql/models/comment');
const validateArticle = require('./article.validate');
const makeSlug = require('./article.utils');

const createArticles = async (req, res) => {
  const UserEmail = req?.authorizedEmail || '';
  console.log('userEmail', UserEmail);
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
    const createResult = await Article.create({ slug, title, description, body, UserEmail });

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

const getArticles = async (req, res) => {
  const { title = '', limit = 10, offset = 0 } = req.body;
  let findResult;
  try {
    if (!title) {
      findResult = await Article.findAndCountAll({
        limit: Number(limit),
        offset: Number(offset),
        include: Tag,
      });
    } else {
      findResult = await Article.findAndCountAll({
        where: {
          title: {
            [sequelize.Op.like]: `%${title}%`,
          },
        },
        include: Tag,
        limit: Number(limit),
        offset: Number(offset),
      });
    }
    console.log(findResult);
    res.status(200).json({
      code: 1,
      message: 'success',
      data: findResult,
    });
  } catch (error) {
    res.status(500).json({
      code: 0,
      message: '内部异常:' + error.message,
    });
  }
};

module.exports = {
  getArticles,
  createArticles,
};
