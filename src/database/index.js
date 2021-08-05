const sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../app/models/User');
const Product = require('../app/models/Product');


const connection = new sequelize(dbConfig);

const models = [User, Product];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new sequelize(dbConfig);

    models.map(model => model.init(this.connection));
  }
}


module.exports = new Database();