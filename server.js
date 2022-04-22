const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const { _info, _error, _warn } = require("./loaders/chalk");

// PATHS
const file_path = require("./config/path");
// DATABASE
const db = require("./config/db");

const makeApp = require("./app");
const app = makeApp(db);


// SERVER START
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(_info("Server running at port: " + port + "."));
});
