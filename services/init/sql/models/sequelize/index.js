const { Sequelize } = require('sequelize');

const { DB_DATABASE, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DIALECT, DB_PORT } = process.env;

const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT,
});

module.exports = sequelize;
