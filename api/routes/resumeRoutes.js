/**** ROUTE PREFIX: /resume *****/

const express = require("express");
const router = express.Router();

// Import controllers
const { getResume } = require("../controllers/resumeController.js");

router.get("/", getResume);

module.exports = router;
