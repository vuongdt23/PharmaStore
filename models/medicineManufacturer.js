const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicineManufacturer = new Schema({
  medicineManufacturerName: {
    type: String,
    required: true,
  },
  medicineManufacturerDescription: {
    type: String,
  },

  medicineManufacturerCountry: {
    type: String,
  },
});

module.exports = mongoose.model("medicineManufacturer", medicineManufacturer);
