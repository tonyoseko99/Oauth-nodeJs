const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

// user registration
router.post("/register", userController.signup);

// user login
router.post("/login", userController.login);

module.exports = router;
