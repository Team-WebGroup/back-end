const User = require('../models/User');
const Phone = require('../models/Phone');

class PhoneController {
  async store(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      if(!user) {
        return res.json({ msg: 'not found' })
      }

      const newPhone = await Phone.create({...req.body, id_user: req.params.id});

      return res.json(newPhone);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'internal server error' });
    }
  }

  async get(req, res) {
    try {
      const getPhones = await Phone.findAll();

      return res.json(getPhones);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'internal server error' });
    }
  }
}


module.exports = new PhoneController;