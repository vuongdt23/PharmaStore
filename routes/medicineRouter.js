const express = require("express");
const medicineController = require('../controllers/medicineController')
const medicineRouter = express.Router();
medicineRouter.get('/', medicineController.getAllMedicines )

module.exports = medicineRouter;