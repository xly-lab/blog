const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Comment = sequelize.define('Comment', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV1,
  },
  // 在这里定义模型属性
  body: {
    // 内容
    type: DataTypes.TEXT,
  },
});

module.exports = Comment;
