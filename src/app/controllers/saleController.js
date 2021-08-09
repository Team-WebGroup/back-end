const User = require('../models/User');
const Sale = require('../models/Sale');

class SaleController {
  async store(req, res) {
    try {

      const newSale = await Sale.create({...req.body, id_user: req.params.id});

      return res.json(newSale)

    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'internal server error' });
    }
  }

  async get(req, res) {
    try {
      const {date, cost, product, amount} = await Sale.findAll({where:{id_user:req.params.id}});

      return res.json({date, cost, product, amount})
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'internal server error' });
    }
  }
}

module.exports = new SaleController;