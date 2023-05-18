const DirectoryWatcher = require("./DirectoryWatcher");
const GitManager = require("./GitManager");

const watcher = new DirectoryWatcher(
  "C:/Users/DEll/Desktop/Kenneth/SearchingLightProject"
);
const gitManager = new GitManager(process.cwd());

watcher.onChange((path) => {
  console.log(`New changes detected at: ${path}`);

  gitManager.commitAndPush();
});
