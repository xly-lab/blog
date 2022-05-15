const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config({
  path: process.env.NODE_ENV ? `./.env.${process.env.NODE_ENV}` : './.env',
});

const sqlConnect = require('./src/init/sql');
const initServer = require('./src/init/server');
const initRouter = require('./src/routes');

const app = express();

// 中间件
app.use(cors()); // 跨域
app.use(express.json()); // 解析
app.use(morgan('short')); // 请求日志

const main = async () => {
  // 连接数据库
  await sqlConnect();
  // 启动服务
  await initServer(app);
  // 初始化路由
  initRouter(app);
};

main();
