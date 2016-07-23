'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable(
    'combos',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      description: {
        type: Sequelize.TEXT,
      },
      executionPattern: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      validStages: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      startPercentRange: {
        type: Sequelize.STRING,
      },
      example: {
        type: Sequelize.STRING,
      },

      onUpdate: 'cascade',
      onDelete: 'cascade'
      },
      {
      engine: 'MYISAM', // default: 'InnoDB'
      charset: 'latin1' // default: null
    })
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable(
    'combos',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      description: {
        type: Sequelize.TEXT,
      },
      executionPattern: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      validStages: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      startPercentRange: {
        type: Sequelize.STRING,
      },
      example: {
        type: Sequelize.STRING,
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
      },
      {
      engine: 'MYISAM', // default: 'InnoDB'
      charset: 'latin1' // default: null
    })
  }
};
