const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('..');

class Comment extends Model {}

Comment.init(
  {
    // 在这里定义模型属性
    body: {
      // 内容
      type: DataTypes.TEXT,
    },
  },
  {
    // 这是其他模型参数
    sequelize, // 我们需要传递连接实例
    modelName: 'Comment', // 我们需要选择模型名称
  }
);

module.exports = Comment;
