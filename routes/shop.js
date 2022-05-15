const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authenticate');
const ProductController = require('../controllers/productsController');
const ProductControllerInstance = new ProductController();
router.get('/', [authenticate], ProductControllerInstance.showAllProducts);

module.exports = router;
