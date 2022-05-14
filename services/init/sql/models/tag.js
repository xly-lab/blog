const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('..');

class Tag extends Model {}

Tag.init(
  {
    // 在这里定义模型属性
    name: {
      // 名称
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    // 这是其他模型参数
    sequelize, // 我们需要传递连接实例
    modelName: 'Tag', // 我们需要选择模型名称
    timestamps: false,
  }
);

module.exports = Tag;
