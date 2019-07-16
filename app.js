'use strict';

const chalk = require('chalk');
const getNames = require('./myModules');

const students = [
  {
    name: 'Anna',
    age: 28
  },
  {
    name: 'Paolo',
    age: 27
  }
];

console.log(chalk.blue.bgGreen.bold(getNames(students)));