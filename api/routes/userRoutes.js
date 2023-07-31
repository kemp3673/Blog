const express = require("express");
const router = express.Router();

// Import controllers
const {
  userLogin,
  userLogout,
  getUserInfo,
  updateUserInfo,
} = require("../controllers/userController.js");

// ***** ROUTES ***** //

/**** USER *****/
// User login
router.post("/login", userLogin);

// User log out
router.post("/logout", userLogout);

// Get user info
router.get("/:username", getUserInfo);

// Update user info
router.patch("/:username", updateUserInfo);

module.exports = router;
