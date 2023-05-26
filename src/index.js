#!/usr/bin/env node
const { program } = require("commander");
const GitManager = require("./GitManager");

program
  .option('-t, --timeout <number>', 'set timeout', parseInt)
  .parse(process.argv);

const timeout = program.timeout || 10000;

if (isNaN(timeout)) {
  console.error('Error: timeout must be a number');
  process.exit(1);
}

const gitManager = new GitManager(process.cwd());

setInterval(() => {
  gitManager.checkForChanges();
}, timeout);

console.log(`
AutoCommiter started sucessfully!
Watching: ${dir}
Timeout: ${timeout}
`);
