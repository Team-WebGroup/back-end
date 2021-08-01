const User = require('../models/User');

class UserController {
  async store(req, res) {

    try {
      const userExist = await User.findOne({ where: { email: req.body.email } });

      if (userExist) {
        return res.status(400).json({ error: 'User already exists' });
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
      const getUsers = await User.findAll();

      if(getUsers.length === 0) {
        return res.status(400).json({ error: 'Users dosent exists' });
      }

      return res.status(200).json(getUsers);

    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'internal server error' });
    }
  }

  async update(req, res) {
    try {
      const userUpdate = await User.findOne({ where: {id : req.params.id}});
      
      if (!userUpdate) {
        return res.status(400).json({ error: 'User dosent exists' });
      }
      
      if(userUpdate.password_hash !== req.body.password_hash) {
        return res.status(403).json({ msg: 'forbidden' });
      }

      await userUpdate.update(req.body);
      return res.status(200).json(userUpdate);
      
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'internal server error' });
    }
  }

  async delete(req, res) {
    try {
      const userDelete = await User.findOne({where: {id: req.params.id}});

      if (!userDelete) {
        return res.status(400).json({ error: 'User dosent exists' });
      }
      
      if(userDelete.password_hash !== req.body.password_hash) {
        return res.status(403).json({ msg: 'forbidden' });
      }

      await userDelete.destroy();
      return res.status(200).json({ msg: 'User successfully deleted'})

    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'internal server error' });
    }
  }
}

module.exports = new UserController();