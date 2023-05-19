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
      const statusSummary = await this.git.status();
      const filesModified = statusSummary.modified;
      const filesAdded = statusSummary.created;
      const filesDeleted = statusSummary.deleted;

      await this.git.add("./*");

      console.log("staged changes");

      let commitMessage = "";
      if (filesAdded.length) {
        commitMessage += `Added files: ${filesAdded.join(", ")}. `;
      }
      if (filesModified.length) {
        commitMessage += `Modified files: ${filesModified.join(", ")}. `;
      }
      if (filesDeleted.length) {
        commitMessage += `Deleted files: ${filesDeleted.join(", ")}. `;
      }

      await this.git.commit(commitMessage);
      console.log("Changes commited successfully", commitMessage);

      const currentBranch = await this.git.revparse(["--abbrev-ref", "HEAD"]);

      await this.git.push("origin", currentBranch);
      console.log("Changes pushed to", currentBranch);
    } catch (error) {
      console.error("An Error ocurred:", error);
    }
  }
}
module.exports = GitManager;
