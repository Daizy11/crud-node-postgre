const express = require('express');
const router = express.Router();
const metode = require('../controller/metodeController')

router.route('/').get(metode.getMetode).post(metode.createMetode)
router.route('/:id').patch(metode.updateMetode).delete(metode.deleteMetode)

module.exports = router

