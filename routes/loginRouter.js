const express = require("express");
const authenticationController = require("../controllers/authenticationController");
const loginRouter = express.Router();

loginRouter.post("/", authenticationController.loginPostHandler);
loginRouter.get("/", authenticationController.loginView);

module.exports = loginRouter;
