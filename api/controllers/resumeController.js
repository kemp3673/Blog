const { replacePDF } = require("../utility/pdfUtils");

const getResume = async (req, res) => {
  try {
    res.download("./static/resume.pdf");
  } catch (error) {
    res
      .status(500)
      .json({ message: "There was a problem downloading the file" });
  }
};

const UpdateResume = async (req, res) => {
  try {
    await replacePDF(req, res);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getResume,
  UpdateResume,
};
