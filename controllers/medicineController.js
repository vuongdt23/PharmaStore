const medicine = require("../models/medicine");
const medicineModel = require("../models/medicine");

exports.getMedicineById = (req, res, next) => {
  const medId = req.params.medId;

  console.log(medId);

  medicineModel
    .findById(medId)
    .then((doc) => {
      if (doc) {
        console.log(doc);
        res.render("medicinePage", { medicine: doc });
      }
      // next();
    })
    .catch((err) => {
      next(err);
    });
};

exports.getAllMedicines =  (req, res, next) => {
  medicineModel
    .find({})
    .then((list) => {
      res.render("medicineList", {
        medList: list,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

medicine.show = async function(request, response) {
  medicine.findOne({_id: request.params._Id}).exec(async function(err, medicine){
      if(err) {
          console.log("Error", err);
      } else {
          response.render("../views/medicines/show", {medicine: medicine});
      };
  });
};
