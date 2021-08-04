const Sequelize = require('sequelize');
const {Model} = require('sequelize');

class Product extends Model {
  static init(sequelize) {
    super.init({
      title: Sequelize.STRING,
      text: Sequelize.STRING,
      image_url: Sequelize.VIRTUAL,

    }, {
      sequelize,
    });
  }
}

module.exports = Product;