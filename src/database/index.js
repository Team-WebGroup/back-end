const sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../app/models/User');
const Address = require('../app/models/Address');


const connection = new sequelize(dbConfig);

const models = [User, Address];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new sequelize(dbConfig);

    models.map(model => model.init(this.connection));

    Address.associate(this.connection.models);
  }
}


module.exports = new Database();