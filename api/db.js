import mysql from "mysql";
import dotenv from "dotenv";

// Load env variables
dotenv.config();
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

db.connect()
  .then(() => {
    console.log("\x1b[33m%s\x1b[0m", "CONNECTED TO DATABASE");
  })
  .catch((err) => {
    console.log(err.message);
  });
