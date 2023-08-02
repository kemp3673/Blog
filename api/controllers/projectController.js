const db = require("../db/db.js");
const executeQuery = require("../utility/executeQuery.js");

const getProjects = async (req, res) => {
  res.status(200).json({ message: "All Projects" });
};

const getSingleProject = async (req, res) => {
  res.status(200).json({ message: "Retrieved Single Project" });
};

const createProject = async (req, res) => {
  res.status(200).json({ message: "Created Project" });
};

const deleteProject = async (req, res) => {
  res.status(200).json({ message: "Deleted Project" });
};

const updateProject = async (req, res) => {
  res.status(200).json({ message: "Updated Project" });
};

module.exports = {
  getProjects,
  getSingleProject,
  createProject,
  deleteProject,
  updateProject,
};
