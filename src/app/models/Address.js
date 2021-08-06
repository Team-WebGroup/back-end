const Sequelize = require('sequelize');
const {Model} = require('sequelize');

class Address extends Model {
  static init(sequelize) {
    super.init({
      zipcode: Sequelize.STRING,
      district: Sequelize.STRING,
      street: Sequelize.STRING,
      number: Sequelize.STRING,
      complement: Sequelize.STRING,
      city: Sequelize.STRING,
      state: Sequelize.STRING,

    }, {
      sequelize,
    });
  }

  static associate(models){
    this.belongsTo(models.User, { foreignKey: 'id_user', as: 'user' });
  }
}

module.exports = Address;