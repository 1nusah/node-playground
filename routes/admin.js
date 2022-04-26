const express = require('express');
const ProductController = require('../controllers/productsController');
const validate = require('../middlewares/validate');
const { addProductSchema } = require('../utils/validation');

//instance of class
const ProductControllerInstance = new ProductController();
const router = express.Router();

const products = [
	{ title: 'Crocs', price: 300, name: 'Crocs Gen 2' },
	{ title: 'Crocs', price: 300, name: 'Crocs Gen 2' },
];

router.post(
	'/add-product',
	[validate(addProductSchema)],
	ProductControllerInstance.add
);

router.delete('/product/:id', ProductControllerInstance.delete);

router.patch(
	'/product/:id',
	[validate(addProductSchema)],
	ProductControllerInstance.update
);

router.get('/product/:id', ProductControllerInstance.getProduct);

module.exports = { router, products };
