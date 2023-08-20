const express = require("express");
const crudController = require("../controller/crudController");
const router = express.Router();

router.route("/").get(crudController.getBuku).post(crudController.createBuku);

router.route('/:id').patch(crudController.updateBuku).delete(crudController.deleteBuku)

module.exports = router;
