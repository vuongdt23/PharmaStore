const express = require("express");
const path = require("path");
const storeRouter = require("./routes/storeRouter");
const homeRouter = require("./routes/homeRouter");
const app = express();
const config = require("./config/config");
const mongoose = require("mongoose");

//Register css directory
app.use(express.static("public"));
//Registering Pug as the view Engine
app.set("view engine", "pug");
app.use("/", homeRouter);

app.use("/stores", storeRouter);

//404 Page


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
