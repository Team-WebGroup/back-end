const Product = require('../models/Product');

class ProductsController {
    async get(req, res) {
        try {
            const getProducts = await Product.findAll();
            return res.status(200).json(getProducts);
          } catch (error) {
            console.log(error);
            return res.status(500).json({ msg: error });
          }
    }
}

module.exports = new ProductsController();