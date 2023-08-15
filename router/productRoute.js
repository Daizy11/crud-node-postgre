const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

// Define routes
router.route('/').get( productController.getProduct).post( productController.createProduct);
router.route('/:id').patch(productController.updateMetode).delete(productController.deleteMetode)
// router.route('/page/:page').get(productController.pagination)
module.exports = router;