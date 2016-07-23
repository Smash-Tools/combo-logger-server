'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    queryInterface.removeColumn("combos", "execution_pattern")
    queryInterface.removeColumn("combos", "valid_stages")

      queryInterface.addColumn("combos", "execution_pattern", Sequelize.ARRAY(Sequelize.STRING))

      queryInterface.addColumn("combos", "valid_stages", Sequelize.ARRAY(Sequelize.STRING))

      queryInterface.addColumn("combos", "executor", Sequelize.STRING )

      queryInterface.addColumn("combos", "susceptible", Sequelize.ARRAY(Sequelize.STRING))
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
