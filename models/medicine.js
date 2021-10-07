const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicineModel = new Schema({
  medicineName: {
    required: true,
    type: String,
  },
  medicinePrice: Number,
  medicineDescription: String,
  medicineUnit: {
    type: mongoose.Types.ObjectId,
    ref: "medicineUnit",
  },
  medicineProvider: {
    type: mongoose.Types.ObjectId,
    ref: "medicineProvider",
  },
  medicineManufacturer: {
    type: mongoose.Types.ObjectId,
    ref: "medicineManufacturer",
  },
});

module.exports = mongoose.model("medicine", medicineModel);
