const express = require('express');
const router = express.Router();
const productCatController = require('../controller/productcatController')

router.route('/').get(productCatController.getProduct).post(productCatController.createProduct)
router.route('/:id').patch(productCatController.updatePenjualan).delete(productCatController.deletePenjualan)


module.exports = router