// THIS FILE IS PROTECTED BY JWT
/**** ROUTE PREFIX: /api/auth *****/

const express = require("express");
const router = express.Router();

// Import controllers
const { updateUserInfo } = require("../../controllers/userController.js");
const {
  createBlog,
  deleteBlog,
  updateBlog,
} = require("../../controllers/blogController.js");
const {
  createProject,
  deleteProject,
  updateProject,
} = require("../../controllers/projectController.js");

/**** USER ROUTES ****/
// Update user info
router.patch("/user/update", updateUserInfo);

/**** BLOG ROUTES *****/
// Create a blog
router.post("/blogs/write", createBlog);

// Delete a blog
router.delete("/blogs/:id", deleteBlog);

// Update a blog
router.patch("/blogs/:id", updateBlog);

/**** PROJECT ROUTES *****/
// Create a project
router.post("/projects/write", createProject);

// Delete a project
router.delete("/projects/:id", deleteProject);

// Update a project
router.patch("/projects/:id", updateProject);

module.exports = router;
