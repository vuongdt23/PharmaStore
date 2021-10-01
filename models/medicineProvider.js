const medicineProvider = new Schema({
    medicineProviderName: {
      type: String,
      required: true
    },
    medicineProviderDescription: {
      type: String,
    },
  });
  
  module.exports = mongoose.model('medicineProvider', medicineProvider)