const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productsController');
const ProductControllerInstance = new ProductController();
router.get('/', ProductControllerInstance.showAllProducts);

module.exports = router;
