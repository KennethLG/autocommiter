const GitManager = require("./GitManager");
const config = require("./config");

const { dir, timeout } = config;

const gitManager = new GitManager(dir);

setInterval(() => {
  gitManager.checkForChanges();
}, timeout);

console.log(`
AutoCommiter started sucessfully!
Watching: ${dir}
Timeout: ${timeout}
`);
