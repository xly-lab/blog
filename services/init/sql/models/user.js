const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const User = sequelize.define('User', {
  // 在这里定义模型属性
  email: {
    // 邮箱
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    // 用户名
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    // 密码
    type: DataTypes.STRING,
    allowNull: false,
  },
  avatar: {
    // 头像
    type: DataTypes.TEXT,
    allowNull: true,
  },
  dio: {
    // 简介
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = User;
