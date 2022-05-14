const dotenv = require('dotenv');
const express = require('express');

dotenv.config({
  path: process.env.NODE_ENV ? `./.env.${process.env.NODE_ENV}` : './.env',
});

const PORT = process.env.PORT || 8899;
const app = express();

require('./init/sql').sqlConnect(() => {
  app.listen(PORT, () => {
    console.log(`服务启动成功 ！已监听端口：${PORT} `);
  });
});
