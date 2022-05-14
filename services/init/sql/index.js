const { Sequelize } = require('sequelize');

const { DB_DATABASE, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DIALECT, DB_PORT } = process.env;

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT,
});

const sqlConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection mysql has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database of mysql:', error);
  }
};

module.exports = sqlConnect;
exports.sequelize = sequelize;
