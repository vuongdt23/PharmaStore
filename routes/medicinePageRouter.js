const express = require("express");

const medicinePageRouter = express.Router();

medicinePageRouter.get("/", (req, res, next) => {
  res.render("medicinePage");
});

module.exports = medicinePageRouter;
