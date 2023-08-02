/**** ROUTE PREFIX: /api/user *****/

const express = require("express");
const router = express.Router();

// Import controllers
const {
  getUserInfo,
  login,
  logout,
} = require("../controllers/userController.js");

// Get user info
router.get("/:id", getUserInfo);

// Login user
router.post("/login", login);

// Logout
router.post("/logout", logout);

module.exports = router;
