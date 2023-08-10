const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

// Define routes
router.route('/').get( productController.getProduct).post( productController.createProduct);

module.exports = router;