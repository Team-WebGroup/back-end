'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', { 
      
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      id_product: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'products', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      id_address: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'addresses', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },

      cost: {
        type: Sequelize.FLOAT,
        allowNull: false
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
    await queryInterface.dropTable('sales');
    
  }
};