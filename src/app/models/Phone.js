const Sequelize = require('sequelize');
const { Model } = require('sequelize');

class Phone extends Model {
  static init(sequelize) {
    super.init({
      phone: Sequelize.STRING
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'id_user', as: 'cliente' });
  }
}

module.exports = Phone;