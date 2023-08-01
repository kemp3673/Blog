const db = require("../db/db.js");

// Function to execute a database query and return a Promise
const executeQuery = (query, values) => {
  return new Promise((resolve, reject) => {
    db.query(query, values, (error, results) => {
      if (error) {
        reject(error); // Reject the Promise with the error
      } else {
        resolve(results); // Resolve the Promise with the query results
      }
    });
  });
};

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
    console.error("Error getting blogs:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while retrieving blogs" });
  }
};

const getSingleBlog = async (req, res) => {
  const blogId = req.params.id;
  const query = `
    SELECT * FROM blogs WHERE id = ?;
  `;

  try {
    const results = await executeQuery(query, [blogId]);
    // Blog entry successfully created
    return res.status(200).json(results);
  } catch (error) {
    console.error("Error getting blogs:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while retrieving blogs" });
  }
};

const createBlog = async (req, res) => {
  const { title, description, main_image, content, user_id } = req.body;

  const query = `
    INSERT INTO blogs (title, description, main_image, content, user_id)
    VALUES (?, ?, ?, ?, ?)
  `;

  try {
    const results = await executeQuery(query, [
      title,
      description,
      main_image,
      content,
      user_id,
    ]);
    // Blog entry successfully created
    return res.status(201).json({
      message: "Blog entry created successfully",
      blogId: results.insertId,
    });
  } catch (error) {
    console.error("Error creating blog:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while creating the blog" });
  }
};

const deleteBlog = async (req, res) => {
  const blogId = req.params.id;
  try {
    await executeQuery(`DELETE FROM blogs WHERE id = ?`, [blogId]);
    // Blog entry successfully deleted
    return res.status(200).json({
      message: "Blog entry deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while deleting the blog" });
  }
};

const updateBlog = async (req, res) => {
  res.status(200).json({ message: "Update Blog" });
};

module.exports = {
  getBlogs,
  getSingleBlog,
  createBlog,
  deleteBlog,
  updateBlog,
};
