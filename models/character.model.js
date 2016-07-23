var Sequelize = require("/Users/BenLee/projects/smash-server/sequelize");
var connection = require("/Users/BenLee/projects/smash-server/connection");
var Combo = require(__dirname + "/combo.model");


var Character = connection.define('characters', {
  name: {
    type: Sequelize.STRING
  },
  img: {
    type: Sequelize.STRING
  },
  primaryKey: true,
  freezeTableName: true
  });
//
// Character.belongsToMany(Combo, {
//   through: "combo_character"
//  })

module.exports = Character;
