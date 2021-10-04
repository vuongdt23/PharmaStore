const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const user = new Schema({
  userAccount: {
    type: String,
    required: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
  userFullName: {
    type: String,
    required: true,
  },
  userDOB: Date,
  isAdmin: Boolean,
});


module.exports = mongoose.model("user", user);
