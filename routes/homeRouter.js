const express = require("express");
const medicineModel = require("../models/medicine");
const medicineUnitModel = require("../models/medicineUnit");
const medicineManufacturerModel = require("../models/medicineManufacturer");
const medicineProviderModel = require("../models/medicineProvider");
const storeModel = require("../models/store");
const countryList = require("../utils/countriesList");
const store = require("../models/store");
const homeRouter = express.Router();

homeRouter.get("/demo", (req, res, next) => {
  let med = new medicineModel({
    medicineName: "Vicodin",
    medicinePrice: 500,
    medicineUnit: "6155c1655b8c7e0aa1c7588c",
    medicineProvider: "61574255526f421be1df053a",
    medicineManufacturer: "61573c683b4ccfce177de4dd",
  });

  med
    .save()
    .then((doc) => {
      res.send(doc);
    })
    .catch((err) => {
      res.send(err);
    });
});

homeRouter.get("/", (req, res, next) => {
  res.render("homePage");
});

module.exports = homeRouter;
