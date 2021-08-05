const { Router } = require('express');
const UserController = require('./app/controllers/userController');
const SessionController = require('./app/controllers/sessionController');
const ProductsController = require('./app/controllers/procutsController');

const AuthMiddleware = require('./app/middlewares/auth').auth;

const routes = Router();

routes.post('/session', SessionController.store);



routes.post('/user', UserController.store);
routes.get('/user', UserController.get);
routes.put('/user/:id',AuthMiddleware, UserController.update);
routes.delete('/user/:id', UserController.delete);

routes.get('/procuts', ); 

module.exports = routes;