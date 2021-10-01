const express = require("express");
const medicineModel = require("../models/medicine");
const medicineUnitModel = require("../models/medicineUnit");
const homeRouter = express.Router();

homeRouter.get("/", (req, res, next) => {
  let msg = "";
  medicineUnitModel.find().then(result=>{
    res.send(result);
  })
});

homeRouter.get("/demo", (req, res, next) => {
  res.render("demo", { string: "Hello Bro" });
});

module.exports = homeRouter;
