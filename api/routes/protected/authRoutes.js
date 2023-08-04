// THIS FILE IS PROTECTED BY JWT
/**** ROUTE PREFIX: /api/auth *****/

const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();

// Import controllers
const {
  updateUserInfo,
  getDetailedUserInfo,
} = require("../../controllers/userController.js");
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
const { UpdateResume } = require("../../controllers/resumeController.js");

// Multer configuration
const storage = multer.diskStorage({
  destination: "./uploads", // Set the destination folder where you want to save the image
  filename: (req, file, cb) => {
    // Use the path module to get the file extension from the original filename
    const fileExtension = path.extname(file.originalname);
    // Set the file name for the saved image (you can adjust it as per your requirement)
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + fileExtension);
  },
});

const upload = multer({ storage });

/**** USER ROUTES ****/
// Update user info
router.patch("/user/update", updateUserInfo);

// Get user info for profile page
router.get("/user/:id", getDetailedUserInfo);

/**** RESUME ROUTES ****/
router.post("/resume", UpdateResume);

/**** BLOG ROUTES *****/
// Create a blog
router.post("/blogs/write", upload.single("main_image"), createBlog);

// Delete a blog
router.delete("/blogs/:id", deleteBlog);

// Update a blog
router.patch("/blogs/:id", upload.single("main_image"), updateBlog);

/**** PROJECT ROUTES *****/
// Create a project
router.post("/projects/write", createProject);

// Delete a project
router.delete("/projects/:id", deleteProject);

// Update a project
router.patch("/projects/:id", updateProject);

module.exports = router;
