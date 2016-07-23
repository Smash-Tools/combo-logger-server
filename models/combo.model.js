var Sequelize = require("/Users/BenLee/projects/smash-server/sequelize");
var connection = require("/Users/BenLee/projects/smash-server/connection");
var Character = require(__dirname + "/character.model");

var Combo = connection.define('combos', {
  description: {
    type: Sequelize.TEXT,
  },
  execution_pattern: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  start_percent_range: {
    type: Sequelize.STRING
  },
  valid_stages: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  example: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

// Combo.belongsToMany(Character, {
//   as: "susceptible",
//   through: "combo_susceptible"
// })
module.exports = Combo;
