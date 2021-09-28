const express = require('express');

const storeRouter = express.Router();

storeRouter.get('/', (req, res, next)=>{
    res.render('homePage')});

module.exports= storeRouter