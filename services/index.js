require('dotenv').config({
  path: process.env.NODE_ENV ? `./.env.${process.env.NODE_ENV}` : './.env',
});
const sqlConnect = require('./init/sql');
const sequelize = require('./init/sql/models/sequelize');
const initServer = require('./init/server');
const express = require('express');
const associateThem = require('./init/sql/models/associateThem');

const app = express();

const main = async () => {
  // 连接数据库
  await sqlConnect();
  associateThem();
  await sequelize.sync();
  // 启动服务
  await initServer(app);
};

main();
