#!/usr/bin/env node

// This example is used as an example in the README for the action handler.
require('colors');
// const { Command } = require('commander'); // (normal include)
const { Command } = require('../'); // include commander in git clone of commander repo
const program = new Command();

program
  .command('serve')
  .argument('<script>')
  .option('-p, --port <number>', 'port number', 80)
  .action(function(script, options){
    console.error('Run script %s on port %s'.green, script, options.port)
  })
  .action(function() {
    console.error('Run script %s on port %s'.red, this.args[0], this.opts().port);
  });

program.parse();

// Try the following:
//    node action-this.js serve --port 8080 index.js
