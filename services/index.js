require('dotenv').config({
  path: process.env.NODE_ENV ? `./.env.${process.env.NODE_ENV}` : './.env',
});
const sqlConnect = require('./init/sql');
const initServer = require('./init/server');
const express = require('express');

const app = express();

const main = async () => {
  // 连接数据库
  await sqlConnect();
  // 启动服务
  await initServer(app);
};

main();
