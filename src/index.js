const GitManager = require("./GitManager");

const projectPath = "C:/Users/DEll/Desktop/Kenneth/SearchingLightProject";

const gitManager = new GitManager(projectPath);

setInterval(() => {
  gitManager.checkForChanges();
}, 3000);

console.log("AutoCommiter started successfully!");
