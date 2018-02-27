'use strict'

const apiRouter = require('express').Router();
const db = require('../db');

apiRouter.use('/plants', require('./plants'));

module.exports = apiRouter;
