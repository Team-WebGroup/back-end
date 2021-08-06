const Sequelize = require('sequelize');
const {Model} = require('sequelize');

class Product extends Model {
  static init(sequelize) {
    super.init({
      title: Sequelize.STRING,
      text: Sequelize.FLOAT,
      image_url: Sequelize.STRING,
      category: Sequelize.STRING,
    }, {
      sequelize,
      timestamps: false
    });
  }
}

module.exports = Product;