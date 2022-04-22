const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

module.exports = function makeApp(database) {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false, limit: "50mb" }));
  app.use(cors());
  app.use(helmet()); // security added
  app.use(morgan("tiny")); // http request logger

  // CHECK SERVER HEALTH
  app.get("/", (req, res) => {
    res.send("Welcome to your API! Yes its Alive!");
  });

  return app;
};
