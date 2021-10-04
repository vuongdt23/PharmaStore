const userModel = require("../models/user");
const bcrypt = require("bcrypt");
exports.loginPostHandler = (req, res, next) => {
  const accountName = req.body.username;
  const password = req.body.password;
  userModel.findOne({ userAccount: accountName }).then((userFound) => {
    if (!userFound) {
      return res.redirect("/login");
    }
    bcrypt
      .compare(password, userFound.userPassword)
      .then((doMatch) => {
        if (doMatch) {
          return res.redirect('/')
        }
        res.redirect("/login");
      })
      .catch((err) => {
        console.log(err);
        res.redirect("/login");
      });
  });
};

exports.loginView = (req, res, next) => {
  res.render("login");
};
