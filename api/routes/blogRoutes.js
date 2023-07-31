const express = require("express");
const router = express.Router();

// Import controllers
const {
  getBlogs,
  getSingleBlog,
  createBlog,
  deleteBlog,
  updateBlog,
} = require("../controllers/blogController.js");

// ROUTER //

/**** BLOGS *****/

// Get all blogs
router.get("/", getBlogs);

// Get one blog
router.get("/:id", getSingleBlog);

// Create a blog
router.post("/", createBlog);

// Delete a blog
router.delete("/:id", deleteBlog);

// Update a blog
router.patch("/:id", updateBlog);

module.exports = router;
