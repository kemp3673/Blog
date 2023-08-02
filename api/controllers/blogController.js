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
    console.error("Error getting blogs:", error.message);
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
    console.error("Error getting blogs:", error.message);
    return res
      .status(500)
      .json({ error: "An error occurred while retrieving blogs" });
  }
};

const createBlog = async (req, res) => {
  const { title, description, main_image, content, user_id } = req.body;

  const blogQuery = `
    INSERT INTO blogs (title, description, main_image, user_id)
    VALUES (?, ?, ?, ?)
  `;

  const contentQuery = `
    INSERT INTO blog_content (blog_id, content)
    VALUES (?, ?)
  `;

  try {
    // Insert into the 'blogs' table
    const blogResults = await executeQuery(blogQuery, [
      title,
      description,
      main_image,
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
  const query = `DELETE FROM blogs WHERE id = ?`;
  const checkQuery = `SELECT * FROM blogs WHERE id = ?`;
  try {
    // Check if the blog entry exists
    const results = await executeQuery(checkQuery, [blogId]);
    // If the blog entry doesn't exist, return an error
    if (results.length === 0) {
      return res.status(404).json({ error: "Blog entry not found" });
    }
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
  // Check if id exists in database
  const checkQuery = `SELECT * FROM blogs WHERE id = ?`;
  // Query to update the blog entry
  const query = `UPDATE blogs SET ? WHERE id = ?`;
  // Values to be inserted into the query
  const values = [updating, blogId];
  // Extract all possible fields from the request body
  const { title, description, main_image, content, user_id } = req.body;

  // Check which fields are being updated and add them to the updating array
  title !== undefined && (updating.title = title);
  description !== undefined && (updating.description = description);
  main_image !== undefined && (updating.main_image = main_image);
  content !== undefined && (updating.content = content);
  user_id !== undefined && (updating.user_id = user_id);

  try {
    // Check if the blog entry exists
    const results = await executeQuery(checkQuery, [blogId]);
    // If the blog entry doesn't exist, return an error
    if (results.length === 0) {
      return res.status(404).json({ error: "Blog entry not found" });
    }
    // If the blog entry exists, update it
    await executeQuery(query, values);
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
