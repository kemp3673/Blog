require("dotenv").config();
const mysql = require("mysql");

// Load env variables
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = process.env;
// TODO Create a second connection to a different user account that only has read access to help secure db from non-validated queries.
const db = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: DB_PORT,
});

console.log("\x1b[33m%s\x1b[0m", "CONNECTED TO DATABASE");

module.exports = db;
