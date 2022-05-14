const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Tag = sequelize.define(
  'Tag',
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
    timestamps: false,
  }
);

module.exports = Tag;
