#!/usr/bin/env node
const { program } = require("commander");
const GitManager = require("./GitManager");

program
  .option("-t, --timeout <number>")
  .parse();

const options = program.opts();

const timeout = parseInt(options.timeout) || 10000;
const dir = process.cwd();

if (isNaN(timeout)) {
  console.error("Error: timeout must be a number");
  process.exit(1);
}

const gitManager = new GitManager(dir);

setInterval(() => {
  gitManager.checkForChanges();
}, timeout);

console.log(`
AutoCommiter started sucessfully!
Watching: ${dir}
Timeout: ${timeout}
`);
