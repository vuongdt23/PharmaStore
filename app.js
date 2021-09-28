const express = require("express");
const path = require("path");
const storeRouter = require("./routes/storeRouter");
const homeRouter = require("./routes/homeRouter");
const app = express();


//Register css directory
app.use(express.static('public'));
//Registering Pug as the view Engine
app.set('view engine', 'pug')

app.use("/stores", storeRouter);
app.use(homeRouter);

//404 Page


//
app.listen(3001);
