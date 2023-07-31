require("dotenv").config();
const express = require("express");
const compression = require("compression");
const cors = require("cors");
const path = require("path");
const app = express();
// Import routes
const blogRoutes = require("./routes/blogRoutes");
const projectRoutes = require("./routes/projectRoutes");
const userRoutes = require("./routes/userRoutes");

// ***** MIDDLWARE *****
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);
app.use(compression());

// Tell express to use cors
app.use(cors());

// Tell express to use json
app.use(express.json());

// Serve up html file

const buildPath = path.join(__dirname, "../client/build");
app.use(express.static(buildPath));

// ***** ROUTES *****
app.use("/api/blogs", blogRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/user", userRoutes);

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

app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});
// Import routes

// Start server on port in env file
app.listen(3000, (error) => {
  if (!error) console.log(`Server listening on port 3000`);
  else console.log("Error occurred, server can't start", error);
});
