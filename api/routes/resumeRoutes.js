const express = require("express");
const router = express.Router();

// Import controllers
const {
  getResume,
  UpdateResume,
} = require("../controllers/resumeController.js");

router.get("/", getResume);

router.put("/", UpdateResume);

module.exports = router;
