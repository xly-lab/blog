const dotenv = require('dotenv');

dotenv.config({
  path: process.env.NODE_ENV ? `./.env.${process.env.NODE_ENV}` : './.env',
});
