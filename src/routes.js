const { Router } = require('express');
const UserController = require('./app/controllers/userController');
const SessionController = require('./app/controllers/sessionController');
const ProductsController = require('./app/controllers/prodcutsController');

const routes = Router();

routes.get('/', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
});

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