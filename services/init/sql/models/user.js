const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../');

class User extends Model {}

User.init(
  {
    // 在这里定义模型属性
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    dio: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    // 这是其他模型参数
    sequelize, // 我们需要传递连接实例
    modelName: 'User', // 我们需要选择模型名称
  }
);

module.exports = User;
