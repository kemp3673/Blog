const db = require("../db/db.js");
const executeQuery = require("../utility/executeQuery.js");
const { hashPassword, comparePassword } = require("../utility/passwordHash.js");

// To pull user data for profile page
const getUserInfo = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const query = `SELECT name, img FROM users WHERE id = ? LIMIT 1`;
  try {
    const results = await executeQuery(query, [id]);
    return res.status(200).json(results);
  } catch (error) {
    console.error("Error getting user info:", error.message);
    return res
      .status(500)
      .json({ error: "An error occurred while retrieving user info" });
  }
};

// To update user data
const updateUserInfo = async (req, res) => {
  console.log("updateUserInfo");
  // Store changes to be made in an object
  const updating = {};
  // Extract all possible fields from the request body
  const { email, password, name, img } = req.body;
  // Check if user exists in database
  const checkQuery = `SELECT * FROM users WHERE email = ?`;
  // Query to update the user
  const query = `UPDATE users SET ? WHERE email = ?`;
  // Values to be inserted into the query
  const values = [updating, email];
  // Check which fields are being updated and add them to the updating array
  email !== undefined && (updating.email = email);
  name !== undefined && (updating.name = name);
  img !== undefined && (updating.img = img);
  if (password !== undefined) {
    try {
      const hashedPassword = await hashPassword(password);
      updating.password = hashedPassword;
    } catch (error) {
      console.error("Error hashing password:", error.message);
      return res
        .status(500)
        .json({ error: "An error occurred while updating user" });
    }
  }

  try {
    // Check if the blog entry exists
    const results = await executeQuery(checkQuery, [email]);
    // If the blog entry doesn't exist, return an error
    if (results.length === 0) {
      return res.status(404).json({ error: "User entry not found" });
    }
    // If the blog entry exists, update it
    await executeQuery(query, values);
    // Blog entry successfully updated
    return res.status(200).json({
      message: "User updated successfully",
    });
  } catch (error) {
    console.error("Error updating user:", error.message);
    return res
      .status(500)
      .json({ error: "An error occurred while updating user" });
  }
};

const login = (req, res) => {
  const { email, password } = req.body;
  const query = `SELECT * FROM users WHERE email = '${email}'`;
  executeQuery(query)
    .then((result) => {
      if (result.length === 0) {
        throw {
          status: 404,
          message: "Username not found",
        };
      }
      const user = result[0];
      if (user.password !== comparePassword(password)) {
        throw {
          status: 401,
          message: "Incorrect password",
        };
      }
      // Assign a token to the user
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      // Send the token to the user
      res.cookie("token", token, { httpOnly: true });
      res.status(200).json({ message: "Login successful" });
    })
    .catch((error) => {
      res.status(error.status).json({ message: error.message });
    });
};

const logout = async (req, res) => {
  res.status(200).json({ message: "Logout" });
};

module.exports = {
  getUserInfo,
  updateUserInfo,
  login,
  logout,
};
