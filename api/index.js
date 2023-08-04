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

// Use compression middleware
app.use(compression());
// Use body-parser middleware to parse request bodies
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// Custom error handler middleware to catch all errors and send back json response
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

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
app.use("/uploads/:image", express.static("uploads"));

// Add middleware to verify web tokens
// app.use(authenticateJWT);
// *****  PROTECTED ROUTES *****
app.use("/api/auth", authRoutes);

// Catch all for any other routes that are not defined above and send index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

// Start server on port in env file
app.listen(PORT, (error) => {
  if (!error) console.log(`Server listening on port ${PORT}`);
  else console.log("Error occurred, server can't start", error);
});
