const sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../app/models/User');
const Product = require('../app/models/Product');
const Address = require('../app/models/Address');
const Phone = require('../app/models/Phone');
const Category = require('../app/models/Category');
const Sale = require('../app/models/Sale');


const connection = new sequelize(dbConfig);

const models = [User, Product, Address, Phone, Category, Sale];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new sequelize(dbConfig);

    models.map(model => model.init(this.connection));

    Address.associate(this.connection.models);
    Phone.associate(this.connection.models);
    Category.associate(this.connection.models);
    Product.associate(this.connection.models);
    Sale.associate(this.connection.models);
  }
}


module.exports = new Database();