const express = require("express");
const router = express.Router();
const medicineController = require("../controllers/medicineController");
const medicineRouter = express.Router();
medicineRouter.get("/", medicineController.getAllMedicines);
medicineRouter.get("/:medId", medicineController.getMedicineById);
module.exports = medicineRouter;
