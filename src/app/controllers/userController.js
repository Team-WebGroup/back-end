const User = require('../models/User');

class UserController {
  async store(req, res) {

    try {
      const userExist = await User.findOne({ where: { email: req.body.email } });

      if (userExist) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      const user = await User.create(req.body);

      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'internal server error' });
    }
  }

  async get(req, res) {
    try {
      const getUser = await User.findByPk(req.userID)

      if(!getUser) {
        return res.status(400).json({ msg: 'User dosent exists' });
      }

      return res.status(200).json(getUser);

    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'internal server error' });
    }
  }
}

module.exports = new UserController();