const db = require("../db/db.js");
const executeQuery = require("../utility/executeQuery.js");

const getProjects = async (req, res) => {
  const query = `
    SELECT
      p.id AS project_id,
      p.title AS project_title,
      p.description AS project_description,
      p.main_image AS project_main_image,
      p.github_link AS project_github_link,
      GROUP_CONCAT(ps.skill) AS project_skills
    FROM
      projects AS p
    LEFT JOIN
      project_skills AS ps ON p.id = ps.project_id
    GROUP BY
      p.id, p.title, p.description, p.main_image, p.github_link
    ORDER BY
      p.id;
  `;

  try {
    const results = await executeQuery(query);
    return res.status(200).json(results);
  } catch (error) {
    console.error("Error getting blogs:", error.message);
    return res
      .status(500)
      .json({ error: "An error occurred while retrieving projects" });
  }
};

const getSingleProject = async (req, res) => {
  const projectId = req.params.projectId;
  const query = `
    SELECT
      p.id AS project_id,
      p.title AS project_title,
      p.description AS project_description,
      p.main_image AS project_main_image,
      p.github_link AS project_github_link,
      GROUP_CONCAT(ps.skill) AS project_skills,
      GROUP_CONCAT(s.image_url) AS project_screenshots
    FROM
      projects AS p
    LEFT JOIN
      project_skills AS ps ON p.id = ps.project_id
    LEFT JOIN
      screenshots AS s ON p.id = s.project_id
    WHERE
      p.id = ?
    GROUP BY
      p.id, p.title, p.description, p.main_image, p.github_link;
  `;

  try {
    const results = await executeQuery(query, [projectId]);
    return res.status(200).json(results);
  } catch (error) {
    console.error("Error getting project details:", error.message);
    return res.status(500).json({
      error:
        "An error occurred while retrieving project details for project #" +
        projectId,
    });
  }
};

const createProject = async (req, res) => {
  const { title, description, mainImage, githubLink, screenshots, skills } =
    req.body;
  const { path } = req.file ? req.file : "";

  const projectQuery = ``;
  const skillsQuery = ``;
  const screenshotsQuery = ``;

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
