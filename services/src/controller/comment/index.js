const Comment = require('../../init/sql/models/comment');
const User = require('../../init/sql/models/user');
const Article = require('../../init/sql/models/article');

// 创建评论
const createComment = async (req, res) => {
  const loggedUser = req.loggedUserInfo || {};
  const { slug = '', body = '' } = req.body || {};
  try {
    const article = await Article.findByPk(slug);
    if (!article) {
      res.status(400).json({
        code: 0,
        message: '当前文章不存在',
      });
      return;
    }
    const createResult = await Comment.create({
      body,
      UserEmail: loggedUser.email,
      ArticleSlug: slug,
    });
    if (!createResult) {
      res.status(400).json({
        code: 0,
        message: '评论失败',
      });
      return;
    }
    res.status(200).json({
      code: 0,
      message: '评论成功',
    });
  } catch (error) {
    res.status(500).json({
      code: 0,
      message: '内部异常:' + error.message,
    });
  }
};

// 获取文章所有评论
const getCommentList = async (req, res) => {
  try {
    const { slug = '', limit = 10, offset = 0 } = req.body || {};
    const article = await Article.findByPk(slug);
    if (!article) {
      res.status(400).json({
        code: 0,
        message: '当前文章不存在',
      });
      return;
    }
    const comments = await Comment.findAndCountAll({
      where: { ArticleSlug: slug },
      limit: Number(limit),
      offset: Number(offset),
    });
    const total = comments?.count ?? 0;
    res.status(200).json({
      code: 1,
      message: '查询成功',
      data: {
        total,
        comments: comments?.rows || [],
      },
    });
  } catch (error) {
    res.status(500).json({
      code: 0,
      message: '内部异常:' + error.message,
    });
  }
};

// 删除评论
const deleteComment = async (req, res) => {
  const { id = '' } = req.body;
  try {
    const comment = await Comment.findByPk(id);
    if (!comment) {
      res.status(400).json({
        code: 0,
        message: '评论不存在',
      });
      return;
    }
    const deleteResult = await comment.destroy();
    if (!deleteResult) {
      res.status(400).json({
        code: 0,
        message: '删除失败',
      });
      return;
    }
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

module.exports = {
  createComment,
  getCommentList,
  deleteComment,
};
