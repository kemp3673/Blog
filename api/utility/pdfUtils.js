const multer = require("multer");
const fs = require("fs-extra");
const path = require("path");

// File name generator
const generateFilenameWithDateTime = () => {
  const currentDate = new Date();
  const filename = `${currentDate.getTime()}-${Math.random()
    .toString(36)
    .substring(2, 15)}`;
  return filename;
};

const replacePDF = (req, res, next) => {
  // Temporary storage
  const storage = multer.diskStorage({
    destination: "./static/temp",
    filename: (req, file, cb) => {
      cb(
        null,
        generateFilenameWithDateTime() + path.extname(file.originalname)
      );
    },
  });

  // File filter
  const fileFilter = (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

  // Init upload
  const upload = multer({
    storage,
    // 1MB file size limit
    limits: { fileSize: 1000000 },
    // Filter file type
    fileFilter,
  }).single("resume"); // resume is the name of the file key from the request

  upload(req, res, async (err) => {
    if (err) {
      res
        .status(500)
        .json({ message: "There was a problem uploading the file" });
    } else {
      const oldFilePath = "./static/resume.pdf";
      const tempOldFilePath = "./static/temp/oldResume.pdf";
      try {
        try {
          // If old file exists
          await fs.promises.access(oldFilePath);
          // Move old file to temp folder
          await fs.promises.rename(oldFilePath, tempOldFilePath);
        } catch {
          // If old file doesn't exist, do nothing
        }

        // Rename new resume and move it to static folder
        await fs.promises.rename(
          `./static/temp/${req.file.filename}`,
          oldFilePath
        );

        // If new file was renamed successfully, delete old file
        if (await fs.existsSync(tempOldFilePath)) {
        }
        try {
          // If old file exists
          await fs.promises.access(tempOldFilePath);
          // Delete it
          await fs.promises.unlink(tempOldFilePath);
        } catch {
          // If old file doesn't exist, do nothing
        }

        // Return success
        res.status(200).json({ message: "Resume successfully updated" });
      } catch (error) {
        try {
          // If old file exists
          await fs.promises.access(tempOldFilePath);
          // Restore it
          await fs.promises.rename(tempOldFilePath, oldFilePath);
        } catch {
          // If old file doesn't exist, do nothing
        }
        res
          .status(500)
          .json({ message: "There was a problem renaming the file" });
      }
    }
  });
};

module.exports = { replacePDF };
