const medicineModel = require("../models/medicine");
const medicineManufacturerModel = require("../models/medicineManufacturer");
const medicineProviderModel = require("../models/medicineProvider");
const medicineUnitModel = require("../models/medicineUnit");

exports.getMedicineById = (req, res, next) => {
  const medId = req.params.medId;

  console.log(medId);

  medicineModel
    .findById(medId)
    .then((doc) => {
      if (doc) {
        // console.log(doc);
        res.render("medicinePage", { medicine: doc });
      }
      // next();
    })
    .catch((err) => {
      next(err);
    });
};

exports.getAllMedicines = (req, res, next) => {
  medicineModel
    .find({})
    .populate("medicineUnit medicineProvider medicineManufacturer")
    .exec()
    .then((result) => {
      res.render("medicineList", { medList: result });
    });
};

exports.editPage = (req, res, next) => {
  const medId = req.params.medId;

  medicineManufacturerModel
    .find({})
    .then((manufacturerList) => {
      medicineProviderModel
        .find({})
        .then((providerList) => {
          medicineUnitModel
            .find({})
            .then((unitList) => {
              medicineModel
                .findById(medId)
                .then((doc) => {
                  if (doc) {
                    //    console.log(doc);
                    res.render("editMedicine", {
                      medicine: doc,
                      providerList: providerList,
                      unitList: unitList,
                      manufacturerList: manufacturerList,
                      medId: medId,
                    });
                  }
                  // next();
                })
                .catch((err) => {
                  next(err);
                });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.medicineEditHandler = (req, res, next) => {
  const medId = req.params.medId;
  //console.log(req.body);
  let newMed = {
    medicineName: req.body.name,
    medicinePrice: req.body.price,
    medicineProvider: req.body.provider,
    medicineUnit: req.body.unit,
    medicineManufacturer: req.body.manufacturer,
  };

  medicineModel.findByIdAndUpdate(medId, newMed).then((result) => {
    //console.log(result)
    res.redirect("/medicines");
  });
  // medicineModel.findByIdAndUpdate(medId)
};

exports.deleteById = (req, res, next) => {
  //const medId = req.params.medId;
  console.log(medId);
  medicineModel.findOneAndRemove({_id: medId}).then((result) => {
    res.redirect("/medicines");
  });
};

exports.addNewMedicineHandler = (req, res, next) => {
  let newMed = {
    medicineName: req.body.name,
    medicinePrice: req.body.price,
    medicineProvider: req.body.provider,
    medicineUnit: req.body.unit,
    medicineManufacturer: req.body.manufacturer,
    medicineDescription: req.body.description
  };

  let med = new medicineModel(newMed).save(result=>{
    res.redirect("/medicines");
  })
};
exports.addNewMedPage = (req, res, next) => {
  medicineManufacturerModel
    .find({})
    .then((manufacturerList) => {
      medicineProviderModel
        .find({})
        .then((providerList) => {
          medicineUnitModel
            .find({})
            .then((unitList) => {
              res.render("addMed", {
                providerList: providerList,
                manufacturerList: manufacturerList,
                unitList: unitList,
              });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};
