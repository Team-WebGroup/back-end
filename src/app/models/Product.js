const Sequelize = require('sequelize');
const { Model } = require('sequelize');

class Product extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      desc: Sequelize.TEXT,
      cost: Sequelize.FLOAT,
      amount: Sequelize.INTEGER,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.Category, { foreignKey: 'id_category', as: 'category' });
    this.hasMany(models.Sale, { foreignKey: 'id_product', as: 'sale' });
  }
}

module.exports = Product;