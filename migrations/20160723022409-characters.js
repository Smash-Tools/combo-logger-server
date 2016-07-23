'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable(
    'characters',
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
      name: {
        type: Sequelize.STRING
      },
      img: {
        type: Sequelize.STRING
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
    'characters',
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
      name: {
        type: Sequelize.STRING
      },
      img: {
        type: Sequelize.STRING
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
