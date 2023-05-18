const git = require("simple-git");

class GitManager {
  constructor(dir) {
    this.git = git(dir);
  }

  async checkForChanges() {
    const diff = await this.git.diff();
    if (diff) {
      console.log("Changes detected!");
      this.commitAndPush();
    }
  }

  async commitAndPush() {
    try {
      const diff = await this.git.diff(["--name-only"]);

      console.log(diff);

      await this.git.add("./*");

      console.log("staged changes");

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
