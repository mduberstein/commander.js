// const { program } = require('commander'); // (normal include)
const { program } = require('../'); // include commander in git clone of commander repo

// This is used as an example in the README for the Quick Start.

program
  .option('--first')
  .option('-s, --separator <char>');

program.parse();

const options = program.opts();
const arguments = program.args;
console.log('Options: %o', options);
console.log('Arguments: %o', arguments);
console.log('Review: process.argv %o', process.argv);

const limit = options.first ? 1 : undefined;
console.log(arguments[0].split(options.separator, limit));


// Try the following:
//    node split
//    node split -s / --fits a/b/c
//    node split -s / --first a/b/c
//    node split --separator=, a,b,c
