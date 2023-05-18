const GitManager = require("./GitManager");

const projectPath = "C:/Users/DEll/Desktop/Kenneth/SearchingLightProject";

const gitManager = new GitManager(projectPath);

const time = 1000 * 60;

setInterval(() => {
  gitManager.checkForChanges();
}, time);

console.log("AutoCommiter started successfully!");
