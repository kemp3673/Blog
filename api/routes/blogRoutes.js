/**** ROUTE PREFIX: /api/blogs *****/

const express = require("express");
const router = express.Router();

// Import controllers
const {
  getBlogs,
  blogCount,
  getSingleBlog,
} = require("../controllers/blogController.js");

// ROUTER //

/**** BLOGS *****/
// Get all blogs
router.get("/", getBlogs);

// Get count of total blogs
router.get("/count", blogCount);

// Get one blog
router.get("/:id", getSingleBlog);

module.exports = router;
