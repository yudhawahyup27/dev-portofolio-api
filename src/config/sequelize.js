const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('portofolio', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;