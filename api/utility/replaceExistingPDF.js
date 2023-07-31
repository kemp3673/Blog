// const fs = require("fs");
// const path = require("path");

// const replaceExistingPDF = (path, body) => {
//   const pdfFileName = "resume.pdf";
//   const existingPdfPath = path.join(pdfFolderPath, pdfFileName);

//   // Check if the existing file exists
//   if (fs.existsSync(existingPdfPath)) {
//     // Remove the existing PDF file
//     fs.unlink(existingPdfPath, (err) => {
//       if (err) {
//         console.error("Error deleting existing PDF file:", err);
//         return;
//       }

//       // Move the new PDF file to the desired location
//       fs.rename(newPdfFilePath, existingPdfPath, (err) => {
//         if (err) {
//           console.error("Error replacing PDF file:", err);
//           return;
//         }
//         console.log("PDF file replaced successfully!");
//       });
//     });
//   } else {
//     console.error("Existing PDF file not found.");
//   }
// };

// module.exports = {
//   replaceExistingPDF,
// };
