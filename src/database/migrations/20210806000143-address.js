'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('addresses', { 

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

      zipcode: {
        type: Sequelize.STRING,
        allowNull: false
      },

      district: {
        type: Sequelize.STRING,
        allowNull: false
      },

      street: {
        type: Sequelize.STRING,
        allowNull: false
      },

      number: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      complement: {
        type: Sequelize.STRING,
        allowNull: false
      },

      city: {
        type: Sequelize.STRING,
        allowNull: false
      },

      state: {
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('addresses');
    
  }
};
