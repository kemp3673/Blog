require("dotenv").config();
const bcrypt = require("bcryptjs");

// Function to hash password
const hashPassword = async (password) => {
  try {
    console.log(process.env.SALT_ROUNDS);
    const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS));
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    console.log(error.message);
    throw {
      status: 500,
      message: "There was a problem hashing the password",
    };
  }
};

// Compare stored password with password entered by user
const comparePassword = async (password, storedPassword) => {
  try {
    const isMatch = await bcrypt.compare(password, storedPassword);
    return isMatch;
  } catch (error) {
    throw {
      status: 500,
      message: "There was a problem comparing the passwords",
    };
  }
};

module.exports = { hashPassword, comparePassword };
