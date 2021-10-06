const express = require("express");
const medicineController = require("../controllers/medicineController");
const medicineRouter = express.Router();
medicineRouter.get("/", medicineController.getAllMedicines);
medicineRouter.get("/:medId", medicineController.getMedicineById);
module.exports = medicineRouter;
medicineRouter.get("/edit/:medId", medicineController.editPage);
medicineRouter.post("/edit/:medId", medicineController.medicineEditHandler);