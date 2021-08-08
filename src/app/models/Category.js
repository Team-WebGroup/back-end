const Sequelize = require('sequelize');
const { Model } = require('sequelize');

class Category extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
    }, {
      sequelize,
    });
  }


  static associate(models) {
    this.hasMany(models.Product, { foreignKey: 'id_category', as: 'product' });
  }
}

module.exports = Category;