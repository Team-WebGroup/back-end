const { Router } = require('express');

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ msg: 'Hello World' });
});


module.exports = routes;