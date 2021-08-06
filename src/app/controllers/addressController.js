const Address = require('../models/Address');
const User = require('../models/User');
const Auth = require('../middlewares/auth');


class AddressController {

  async store(req, res) {
    try {
      
      const user = await User.findByPk(req.params.id);

      if(!user) {
        return res.status(400).json({ msg: 'User dosent exists' });
      }

      const address = await Address.create({...req.body, id_user: req.params.id});

      return res.status(200).json(address);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'internal server error' });
    }
  }

  async get(req, res) {
    try {
      
      const address = await Address.findOne({ where:{id_user: req.userID}});

      if(!address) {
        return res.status(400).json({ error: 'Address dosent exists' });
      }

      return res.status(200).json(address);

    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'internal server error' });
    }
  }
}


module.exports = new AddressController();