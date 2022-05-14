const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('..');

class Article extends Model {}

Article.init(
  {
    // 在这里定义模型属性
    slug: {
      // 别名
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      // 标题
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      // 描述
      type: DataTypes.TEXT,
    },
    body: {
      // 内容
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    // 这是其他模型参数
    sequelize, // 我们需要传递连接实例
    modelName: 'Article', // 我们需要选择模型名称
  }
);

module.exports = Article;
