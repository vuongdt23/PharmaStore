const express = require('express');
const registerRouter = express.Router();
const User = require("../models/user")
const accountController = require("../controllers/accountController")


registerRouter.post('/', async (req, res) => {
    // Check if this user already exisits
    let user = await User.findOne({ username: req.body.username });
    if (!user) {
        return res.status(400).send('That user already exisits!');
    } else {
        // Insert the new user if they do not exist yet
        user = new User({
            userAccount:req.body.username,
            userPassword:req.body.password,
            userFullName:req.body.userfullname,
            userDOB:req.body.userdob,
            
        });
        await user.save();
        res.redirect('/login')
    }
});

registerRouter.get("/", (req, res, next) => {
    res.render("register");
  });

  
module.exports = registerRouter;