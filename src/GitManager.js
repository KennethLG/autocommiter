class GitManager {
  constructor(dir) {
    this.git = git(dir);
  }

  commitAndPush(message) {
    this.git
      .add("./*")
      .commit(message)
      .push("origin", "main", () =>
        console.log("Changes commited succesfully!")
      )
      .catch((err) => console.error("An Error ocurred:", err));
  }
}

module.exports = GitManager;
