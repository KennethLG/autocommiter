const git = require("simple-git");
const exec = util.promisify(require("child_process").exec);

class GitManager {
  constructor(dir) {
    this.git = git(dir);
  }

  async commitAndPush() {
    try {
      await this.git.add("./*");
      await exec("aic");
      await this.git.push("origin", "main");
      console.log("Changes commited successfully");
    } catch (error) {
      console.error("An Error ocurred:", err);
    }
  }
}

module.exports = GitManager;
