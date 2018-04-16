const express = require('express');

const route = express.Router();

route.use('/api', require('./product'));
route.use('/api', require('./post'));

module.exports = route;