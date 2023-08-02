require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");
const path = require("path");
const app = express();
// Import middleware
const authenticateJWT = require("./utility/webTokens");
// Import routes
const authRoutes = require("./routes/protected/authRoutes");
const blogRoutes = require("./routes/blogRoutes");
const projectRoutes = require("./routes/projectRoutes");
const userRoutes = require("./routes/userRoutes");
const resumeRoutes = require("./routes/resumeRoutes");

const PORT = process.env.PORT || 8000;

// ***** MIDDLWARE *****
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);
app.use(compression());
// Use body-parser middleware to parse request bodies
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Tell express to use cors
app.use(cors());

// Tell express to use json
app.use(express.json());

// Serve up html file
const buildPath = path.join(__dirname, "../client/build");
app.use(express.static(buildPath));

// *****  OPEN ROUTES *****
app.use("/api/blogs", blogRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/user", userRoutes);
app.use("/resume", resumeRoutes);

// Serve up resume
app.get("/resume", (req, res) => {
  try {
    res.download("./static/resume.pdf");
  } catch (error) {
    throw {
      status: 500,
      message: "There was a problem retrieving the pdf file",
    };
  }
});

// Replace resume
// app.post("/resume", (req, res) => {
//   try {

// Catch all for any other routes that are not defined above and send index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

// Add middleware to verify web tokens
// app.use(authenticateJWT);
// *****  PROTECTED ROUTES *****
app.use("/api/auth", authRoutes);

// Start server on port in env file
app.listen(PORT, (error) => {
  if (!error) console.log(`Server listening on port ${PORT}`);
  else console.log("Error occurred, server can't start", error);
});
