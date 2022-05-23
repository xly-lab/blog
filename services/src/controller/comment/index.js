const Comment = require('../../init/sql/models/comment');
const User = require('../../init/sql/models/user');
const Article = require('../../init/sql/models/article');

// 创建评论
const createComment = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({
      code: 0,
      message: '内部异常:' + error.message,
    });
  }
};

// 删除评论
const deleteComment = async (req, res) => {
  try {
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
