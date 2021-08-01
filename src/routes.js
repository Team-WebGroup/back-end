const { Router } = require('express');
const UserController = require('./app/controllers/userController');
const SessionController = require('./app/controllers/sessionController');

const routes = Router();

routes.post('/session', SessionController.store);

routes.post('/user', UserController.store);
routes.get('/user', UserController.get);
routes.put('/user/:id', UserController.update);
routes.delete('/user/:id', UserController.delete);

module.exports = routes;