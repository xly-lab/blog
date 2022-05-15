const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Comment = sequelize.define('Comment', {
  // 在这里定义模型属性
  body: {
    // 内容
    type: DataTypes.TEXT,
  },
});

module.exports = Comment;
