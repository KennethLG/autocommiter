const chokidar = require("chokidar");

class DirectoryWatcher {
  constructor(path) {
    this.path = path;
    this.watcher = chokidar.watch(path, {
      ignored: /(^|[\/\\])\../,
      persistent: true,
    });
  }

  onChange(callback) {
    this.watcher.on("change", callback);
  }
}
module.exports = DirectoryWatcher;
