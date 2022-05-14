const sequelize = require('./sequelize');

const sqlConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection mysql has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database of mysql:', error);
  }
};

module.exports = sqlConnect;
