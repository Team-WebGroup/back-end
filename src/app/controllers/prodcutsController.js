const Product = require('../models/Product');
const { Op } = require("sequelize");
 
class ProductsController {
    async get(req, res) {
        try {
            const getProducts = await Product.findAll();
            return res.status(200).json(getProducts);
          } catch (error) {
            console.log(error);
            return res.status(500).json({ msg: "erro" });
          }
    }

    async getAsc(req, res){
        try{
          const getProducts = await Product.findAll({ separate: true, order: ['text']});
          return res.status(200).json(getProducts);
        }catch(err){
          console.log(err)
          return res.status(500).json({ msg: "error" });
        }
    }

    async getDesc(req, res){
      try{
        const getProducts = await Product.findAll({ separate: true, order: [['text', 'DESC']]});
        return res.status(200).json(getProducts);
      }catch(err){
        console.log(err)
        return res.status(500).json({ msg: "error" });
      }
    }

    async getBetween(req, res){
      const {min, max} = req.body;
      try{
        const getProducts = await Product.findAll({ where: {text: {[Op.between]: [min, max]}}});
        return res.status(200).json(getProducts);
      }catch(err){
        console.log(err)
        return res.status(500).json({ msg: "error" });
      }
    }

}

module.exports = new ProductsController();