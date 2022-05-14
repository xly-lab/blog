const sequelize = require('./sequelize');
const associateThem = require('./models/associateThem');

const sqlConnect = async () => {
  try {
    await sequelize.authenticate();
    associateThem();
    await sequelize.sync({ alter: true });
    console.log('Connection mysql has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database of mysql:', error);
  }
};

module.exports = sqlConnect;
