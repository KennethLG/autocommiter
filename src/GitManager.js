const fs = require("fs");
const git = require("simple-git");
const { spawn } = require("child_process");

class GitManager {
  constructor(dir) {
    this.git = git(dir);
    this.dir = dir;
    this.lastModified = this.getLatestModTime(dir);
  }

  getLatestModTime(dir) {
    const files = fs.readdirSync(dir);
    return files
      .map((file) => fs.statSync(dir + "/" + file).mtime.getTime())
      .sort((a, b) => b - a)[0];
  }

  checkForChanges() {
    const latest = this.getLatestModTime(this.dir);
    if (this.lastModified < latest) {
      this.lastModified = latest;
      this.commitAndPush();
      console.log("Changes detected!");
    } else {
      console.log("No changes detected");
    }
  }

  async commitAndPush() {
    try {
      const diff = await this.git.diff(["--name-only"]);
      await this.git.add("./*");

      // Crear el mensaje de commit a partir de la lista de archivos
      const commitMessage = `Modified files: ${diff.split("\n").join(", ")}`;

      // Hacer el commit con el mensaje creado
      await this.git.commit(commitMessage);
      console.log("Changes commited successfully", commitMessage);

      await this.git.push("origin", "main");
      console.log("Changes pushed");
    } catch (error) {
      console.error("An Error ocurred:", error);
    }
  }
}
module.exports = GitManager;
