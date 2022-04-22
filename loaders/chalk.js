const chalk = require("chalk");

const _info = chalk.bold.blue;
const _warn = chalk.bold.yellow;
const _error = chalk.bold.bgRed.black;

module.exports = { _info, _warn, _error };
