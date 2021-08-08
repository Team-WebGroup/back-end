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

      id_category: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'categories', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
    
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      desc: {
        type: Sequelize.TEXT,
      },

      cost: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },

      amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }

    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  }
};
