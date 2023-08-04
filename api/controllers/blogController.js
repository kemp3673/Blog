const express = require("express");
const multer = require("multer");
const path = require("path");
const db = require("../db/db.js");
const fs = require("fs");
const executeQuery = require("../utility/executeQuery.js");

const getBlogs = async (req, res) => {
  const limit = 10; // Set the number of records to fetch per page
  const offset = 10 * (req.body.page || 0); // Set the offset for the current page

  const query = `
    SELECT * FROM blogs
    ORDER BY id DESC
    LIMIT ? OFFSET ?;
  `;

  try {
    const results = await executeQuery(query, [limit, offset]);
    // Blog entry successfully created
    return res.status(200).json(results);
  } catch (error) {
    console.error("Error getting blogs:", error.message);
    return res
      .status(500)
      .json({ error: "An error occurred while retrieving blogs" });
  }
};

const getSingleBlog = async (req, res) => {
  const blogId = req.params.id;
  const query = `
  SELECT
  bc.content,
  b.description,
  b.title,
  b.main_image,
  b.created_at,
  b.updated_at,
  b.id,
  u.name AS author_name,
  u.img AS author_img
  FROM
    blogs b
  INNER JOIN
    blog_content bc ON b.id = bc.blog_id
  INNER JOIN
    users u ON b.user_id = u.id
  WHERE
    b.id = ?;
    `;
  try {
    const results = await executeQuery(query, [blogId]);
    // Blog entry successfully created
    return res.status(200).json(results);
  } catch (error) {
    console.error("Error getting blog content:", error.message);
    return res
      .status(500)
      .json({ error: "An error occurred while retrieving blog content" });
  }
};

const createBlog = async (req, res) => {
  const { title, description, content, user_id } = req.body;
  const { path } = req.file ? req.file : "";

  const blogQuery = `
    INSERT INTO blogs (title, description, main_image, user_id)
    VALUES (?, ?, ?, ?)
  `;

  const contentQuery = `
    INSERT INTO blog_content (blog_id, content)
    VALUES (?, ?)
  `;

  // Save main_image to server and get the path
  const imagePath = req.file.path;
  // const imageUrl = `http://127.0.0.1:3000/api/${imagePath}`;

  try {
    // Insert into the 'blogs' table
    const blogResults = await executeQuery(blogQuery, [
      title,
      description,
      imagePath,
      user_id,
    ]);

    // Get the newly inserted 'blog_id'
    const blogId = blogResults.insertId;

    // Insert into the 'blog_content' table using the retrieved 'blog_id'
    await executeQuery(contentQuery, [blogId, content]);

    // Blog entry successfully created
    return res.status(201).json({
      message: "Blog entry created successfully",
      blogId: blogId,
    });
  } catch (error) {
    console.error("Error creating blog:", error.message);
    return res
      .status(500)
      .json({ error: "An error occurred while creating the blog" });
  }
};

const deleteBlog = async (req, res) => {
  const blogId = req.params.id;

  // Get the path of the image to be deleted
  const imagePathQuery = `SELECT main_image FROM blogs WHERE id = ?`;
  const query = `DELETE FROM blogs WHERE id = ?`;
  const checkQuery = `SELECT * FROM blogs WHERE id = ?`;
  try {
    // Check if the blog entry exists
    const results = await executeQuery(checkQuery, [blogId]);
    // If the blog entry doesn't exist, return an error
    if (results.length === 0) {
      return res.status(404).json({ error: "Blog entry not found" });
    }
    // Get the path of the image to be deleted
    const imagePathResults = await executeQuery(imagePathQuery, [blogId]);
    const imagePath = imagePathResults[0].main_image;
    // Delete the image from the server
    fs.unlinkSync(imagePath);
    // Delete the blog entry from the database
    await executeQuery(query, [blogId]);
    // Blog entry successfully deleted
    return res.status(200).json({
      message: "Blog entry deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting blog:", error.message);
    return res
      .status(500)
      .json({ error: "An error occurred while deleting the blog" });
  }
};

const updateBlog = async (req, res) => {
  // ID of which blog entry to update
  const blogId = req.params.id;
  // Array to store all fields that are being updated
  const updating = {};
  const contentUpdate = {};
  // Check if id exists in database
  const checkQuery = `SELECT * FROM blogs WHERE id = ?`;
  // Query to update the blog entry
  const query = `UPDATE blogs SET ? WHERE id = ?`;
  // Values to be inserted into the query
  const values = [updating, blogId];
  // Extract all possible fields from the request body
  const { title, description, content, user_id } = req.body;

  // Check which fields are being updated and add them to the updating array
  title !== undefined && (updating.title = title);
  description !== undefined && (updating.description = description);
  user_id !== undefined && (updating.user_id = user_id);
  // Update the content field using a parameterized query
  content !== undefined && (contentUpdate.content = content);

  // If a new image is being uploaded, update the main_image field
  if (req.file) {
    updating.main_image = req.file.path;
    // GET THE OLD IMAGE PATH FROM THE DATABASE
    const oldImageQuery = `SELECT main_image FROM blogs WHERE id = ?`;
    const oldImageResults = await executeQuery(oldImageQuery, [blogId]);
    const oldImagePath = oldImageResults[0].main_image;
    // Unlink the old image from the server
    fs.unlink(oldImagePath, (err) => {
      if (err) throw err;
      console.log(`Old image successfully deleted for blog ${blogId}`);
    });
  }

  try {
    // Check if the blog entry exists
    const results = await executeQuery(checkQuery, [blogId]);
    // If the blog entry doesn't exist, return an error
    if (results.length === 0) {
      return res.status(404).json({ error: "Blog entry not found" });
    }
    // If the blog entry exists, update it
    if (Object.keys(updating).length !== 0) {
      await executeQuery(query, values);
    }
    if (Object.keys(contentUpdate).length !== 0) {
      await executeQuery(`UPDATE blog_content SET ? WHERE blog_id = ?`, [
        contentUpdate,
        blogId,
      ]);
    }
    // Blog entry successfully updated
    return res.status(200).json({
      message: "Blog entry updated successfully",
    });
  } catch (error) {
    console.error("Error updating blog:", error.message);
    return res
      .status(500)
      .json({ error: "An error occurred while updating the blog" });
  }
};

module.exports = {
  getBlogs,
  getSingleBlog,
  createBlog,
  deleteBlog,
  updateBlog,
};
