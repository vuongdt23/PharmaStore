const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicineUnit = new Schema({
  medicineUnitName: {
    type: String,
    required: true
  },
  medicineUnitDescription: {
    type: String,
  },
});

module.exports = mongoose.model('medicineUnit', medicineUnit)