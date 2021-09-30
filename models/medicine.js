const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicineModel = new Schema({
  medicineName: {
    required: true,
    type: String,
  },
  medicinePrice: Number,
  medicineUnit: {
      type: mongoose.Types.ObjectId, ref: "medicineUnit"
  }
});



module.exports = mongoose.model("medicine", medicineModel);
