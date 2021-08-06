'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', { 
      
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      text: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },

      image_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      category: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  }
};
