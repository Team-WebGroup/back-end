const { Router } = require('express');
const UserController = require('./app/controllers/userController');
const SessionController = require('./app/controllers/sessionController');
const ProductsController = require('./app/controllers/prodcutsController');

const routes = Router();

routes.post('/session', SessionController.store);

routes.post('/user', UserController.store);
routes.get('/user', UserController.get);
routes.put('/user/:id', UserController.update);
routes.delete('/user/:id', UserController.delete);

routes.get('/products', ProductsController.get);
routes.get('/products/asc', ProductsController.getAsc);
routes.get('/products/desc', ProductsController.getDesc);
routes.get('/products/bet', ProductsController.getBetween);

module.exports = routes;