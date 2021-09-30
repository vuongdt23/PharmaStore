const express = require("express");
const medicineModel = require("../models/medicine");
const medicineUnitModel = require('../models/medicineUnit')
const homeRouter = express.Router();

homeRouter.get("/", (req, res, next) => {
 var medicineUnitDemo = new medicineUnitModel({
     medicineUnitName : "500mg tablet",
     medicineUnitDescription: "For oral intake"
 });

 medicineUnitDemo.save();

 var medicine = new medicineModel({
     medicineName: "Vicodin",
     medicinePrice: 5000,
     medicineUnit: medicineUnitDemo
 });

 medicine.save().then(result=>{
     res.send(result)
 }).catch(err=>{
     console.log(err)
 })
});

homeRouter.get("/demo", (req, res, next) => {
  res.render("demo", { string: "Hello Bro" });
});

module.exports = homeRouter;
