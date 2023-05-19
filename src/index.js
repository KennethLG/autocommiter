const GitManager = require("./GitManager");
const config = require("./config");

const projectPath = config.dir;

const gitManager = new GitManager(projectPath);

setInterval(() => {
  gitManager.checkForChanges();
}, config.timeout);

console.log("AutoCommiter started successfully!");
