/**** ROUTE PREFIX: /api/projects *****/

const express = require("express");
const router = express.Router();

// Import controllers
const {
  getProjects,
  getSingleProject,
  createProject,
  deleteProject,
  updateProject,
} = require("../controllers/projectController.js");

// ***** ROUTES ***** //

/**** PROJECTS *****/
// Get all projects
router.get("/", getProjects);

// Get one project
router.get("/:id", getSingleProject);

module.exports = router;
