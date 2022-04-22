const mysql = require("mysql");
require("dotenv").config();
const { _info, _error, _warn } = require("../loaders/chalk");

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
  console.error(_warn("DATABASE NOT IMPLEMENTED!"));
  if (err) {
    console.error(_error("Database connection error! (" + err.code + ")"));
  }
});

module.exports = db;
