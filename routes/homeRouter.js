const express = require('express');

const homeRouter = express.Router();

homeRouter.get((req, res, next) =>{
    res.render('homePage')
})
module.exports = homeRouter;