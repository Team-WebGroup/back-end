const { Router } = require('express');
const UserController = require('./app/controllers/userController');
const SessionController = require('./app/controllers/sessionController');

const ProductsController = require('./app/controllers/productsController');
const AddressController = require('./app/controllers/addressController');

const AuthMiddleware = require('./app/middlewares/auth').auth;
const PhoneController = require('./app/controllers/phoneControllers');
const CategoryController = require('./app/controllers/categoryController');
const SaleController = require('./app/controllers/saleController');


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
routes.get('/user', AuthMiddleware, UserController.get);

routes.post('/products', ProductsController.store);
routes.get('/products', ProductsController.get);
routes.get('/products/cat/:id', ProductsController.getCate);
routes.get('/products/desc', ProductsController.getDesc);
routes.get('/products/bet', ProductsController.getBetween);

routes.post('/categories', CategoryController.store);
routes.get('/categories', CategoryController.get);

routes.post('/address/:id', AddressController.store);
routes.get('/address', AuthMiddleware, AddressController.get);

routes.post('/phone/:id', PhoneController.store);
routes.get('/phone', AuthMiddleware, PhoneController.get);

routes.post('/sale/:id', SaleController.store);
routes.get('/sale', SaleController.get);

routes.get('/procuts', ); 

module.exports = routes;