const mysql = require("mysql");
require("dotenv").config();

const db = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DB,
  multipleStatements: true /* turn on multiple statements */,
});

db.getConnection((err) => {
  if (err) {
    console.error("Database connection error! (" + err.code + ")");
    console.error("DATABASE NOT IMPLEMENTED!");
  }
});

module.exports = db;
