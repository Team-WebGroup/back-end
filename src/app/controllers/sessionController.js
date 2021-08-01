const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');
const User = require('../models/User');

class SessionController {
    async store(req, res) {

      const user = await User.findOne({ where:{email: req.body.email}})

      if(!user){
        return res.status(401).json({ error: 'User not found'});
      }

      if(!(await user.checkPassword(req.body.password))) {
        return res.status(401).json({ error: 'Password does not match'});
      }

      const { id, name, email} = user;

      return res.json({
        user:{
          id,
          name,
          email,
        },
        token: jwt.sign({id}, authConfig.secret, {
          expiresIn: authConfig.expiresIn
        })
      })
    }
}

module.exports = new SessionController();