'use strict'

const chalk = require('chalk');
const Sequelize = require('sequelize');
const pkg = require('../../package.json');

console.log(chalk.yellow('Opening database connection'));

//create db instance
module.exports = new Sequelize('postgres://localhost:5432/plants', {
  logging: false,
});
