// const { replaceExistingPDF } = require("../utility/replaceExistingPDF");

const getResume = async (req, res) => {
  try {
    res.download("./static/resume.pdf");
  } catch (error) {
    throw {
      status: 500,
      message: "There was a problem retrieving the pdf file",
    };
  }
};

const UpdateResume = async (req, res) => {
  res.status(200).json({ message: "Update Resume" });
};

module.exports = {
  getResume,
  UpdateResume,
};
