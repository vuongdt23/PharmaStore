const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const store = new Schema({
  storeName: {
    type: String,
    required: true,
  },
  storeAddress: {
    type: String,
    required: true,
  },
  drugInStock: [
    {
      type: mongoose.Types.ObjectId,
      ref: "medicine",
    },
  ],
  storeManager: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});

module.exports = mongoose.model("store", store);
