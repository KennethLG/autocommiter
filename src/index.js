const chokidar = require("chokidar");

const projectPath = "C:/Users/DEll/Desktop/Kenneth/SearchingLightProject";

const watcher = chokidar.watch(projectPath, {
  ignored: /(^|[\/\\])\../,
  persistent: true,
});

watcher.on("change", (path) => {
  console.log(`New changes detected at: ${path}`);
});
