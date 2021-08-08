const Category = require('../models/Category');

class CategoryController {

  async store(req, res) {
    try {
      const storeCategories = await Category.create(req.body);
      return res.status(200).json(storeCategories);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'internal server error' });
    }
  }

  async get(req, res) {
    try {
      const getCategories = await Category.findAll();

      return res.json(getCategories);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'internal server error' });
    }
  }
}

module.exports = new CategoryController;