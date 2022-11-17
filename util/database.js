const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'localhost', '120401Aa', {
  host: 'localhost',
  dialect:  'mysql' 
})
module.exports = sequelize;
