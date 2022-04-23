const express = require('express');
const router = express.Router();
const path = require('path');
const { Product } = require('../models/products');
const admin = require('./admin');
router.get('/', async (req, res, next) => {
	const products = await Product.find();
	// console.log('products', products);
	res.status(200).json({ products, message: 'Successful' });
});

module.exports = router;
