const express = require('express');
require('dotenv').config({
  path: process.env.NODE_ENV ? `./.env.${process.env.NODE_ENV}` : './.env',
});

const sqlConnect = require('./init/sql');
const initServer = require('./init/server');
const initRouter = require('./src/routes');

const app = express();

const main = async () => {
  // 连接数据库
  await sqlConnect();
  // 初始化路由
  initRouter(app);
  // 启动服务
  await initServer(app);
};

main();
