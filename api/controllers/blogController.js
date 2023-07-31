const getBlogs = async (req, res) => {
  res.status(200).json({ message: "All Blogs" });
};

const getSingleBlog = async (req, res) => {
  res.status(200).json({ message: "Single Blogs" });
};

const createBlog = async (req, res) => {
  res.status(200).json({ message: "Create Blog" });
};

const deleteBlog = async (req, res) => {
  res.status(200).json({ message: "Delete Blog" });
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
