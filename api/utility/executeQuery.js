const db = require("../db/db.js");

// Function to execute a database query and return a Promise
const executeQuery = (query, values) => {
  return new Promise((resolve, reject) => {
    db.query(query, values, (error, results) => {
      if (error) {
        reject(error); // Reject the Promise with the error
      } else {
        resolve(results); // Resolve the Promise with the query results
      }
    });
  });
};

// export default executeQuery;
module.exports = executeQuery;
