const { config } = require("dotenv");
const path = require("path");

config({
  path: path.join(__dirname, ".env")
});

module.exports = {
  timeout: parseInt(process.env.TIMEOUT) || 1000,
  dir: process.env.WORKDIR || process.cwd(),
};
