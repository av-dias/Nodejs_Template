const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http").Server(app);
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(cors());

// SERVER START
const port = 4000;
http.listen(port, () => {
  console.log("Server running at port: " + port + ".");
});

app.post("/", (req, res) => {
  res.send("Welcome to your API! Yes its Alive!");
});

// DEFINE LOCAL vs SERVER
// DISCLAIMER: WHITESPACE AT THE END
if (process.env.NODE_ENV == "dev") {
  var file_path = process.env.NODE_LOCAL || "http://127.0.0.1:8887";
} else {
  var file_path = process.env.NODE_SERVER || "storage";
}

//DATABASE
const mysql = require("mysql");
// BD export
var db = require("./db");