require("dotenv").config();
const jwt = require("jsonwebtoken");
const secretKey = process.env.KEY;

const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "You must be logged in" });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(401).json({ error: "Invalid token" });
    }

    req.user = user; // Attach the user data to the request object for use in route handlers
    next(); // Call next() to proceed to the next middleware or route handler
  });
};

module.exports = authenticateJWT;
