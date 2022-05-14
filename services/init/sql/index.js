const { Sequelize } = require('sequelize');

const { DB_DATABASE, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DIALECT, DB_PORT } = process.env;

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT,
});

const sqlConnect = async (cb) => {
  try {
    await sequelize.authenticate();
    console.log('Connection mysql has been established successfully.');
    cb?.();
  } catch (error) {
    console.error('Unable to connect to the database of mysql:', error);
  }
};

exports.sqlConnect = sqlConnect;
