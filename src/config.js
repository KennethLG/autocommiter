const { config } = require("dotenv");

config();

module.exports = {
  timeout: parseInt(process.env.TIMEOUT) || 1000,
  dir: process.env.WORKDIR || process.cwd(),
};
