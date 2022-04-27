const express = require('express');
const ProductController = require('../controllers/productsController');
const validate = require('../middlewares/validate');
const { addProductSchema } = require('../utils/validation');

//instance of class
const ProductControllerInstance = new ProductController();
const router = express.Router(['strict']);

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

module.exports = { router };
