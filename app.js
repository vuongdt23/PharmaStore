const express = require("express");
const path = require("path");
const User = require("./models/user");
const storeRouter = require("./routes/storeRouter");
const homeRouter = require("./routes/homeRouter");
const loginRouter = require("./routes/loginRouter");
const medicineRouter = require("./routes/medicineRouter");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();
const config = require("./config/config");
const mongoose = require("mongoose");

//Register css directory
app.use(express.static("public"));
//Registering Pug as the view Engine
app.set("view engine", "pug");

//use BodyParser
app.use(bodyParser.urlencoded({ extended: false }));

//passport

app.use("/", homeRouter);
app.use("/login", loginRouter);
app.use("/stores", storeRouter);
app.use("/medicines", medicineRouter);

//establish a connection to the MongoDB instance
mongoose
  .connect(config.mongodbURI)
  .then(() => {
    //   console.log("connected");
    app.listen(3001);
  })
  .catch((err) => {
    console.log(err);
  });
