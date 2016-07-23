var Sequelize = require("/Users/BenLee/projects/smash-server/sequelize");

//Instantiate Sequelize//
var connection = new Sequelize(
  'combo-logger-db', '', 'password', {
    host: 'localhost',
    dialect: 'postgres'
  });

module.exports = connection;
