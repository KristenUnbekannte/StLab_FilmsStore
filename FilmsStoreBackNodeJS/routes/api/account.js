const express = require("express");

const accountController = require("../../controllers/account-controller");
const { validateRegister } = require("../../middleware/validation/register");
const { validateLogin } = require("../../middleware/validation/login");

const router = express.Router();

router
  .post("/register", validateRegister, accountController.register)
  .post("/login", validateLogin, accountController.login);

module.exports = router;
