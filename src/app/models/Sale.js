const Sequelize = require('sequelize');
const { Model } = require('sequelize');

class Sale extends Model {
  static init(sequelize) {
    super.init({
      date: Sequelize.DATE,
      amount: Sequelize.INTEGER,
      cost: Sequelize.FLOAT,
    }, {
      sequelize,
    });
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'id_user', as: 'user' });
    this.belongsTo(models.Address, { foreignKey: 'id_address', as: 'address' });
    this.belongsTo(models.Product, { foreignKey: 'id_product', as: 'product' });
  }
}

module.exports = Sale;