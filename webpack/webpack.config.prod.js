const merge = require('deepmerge');

const config = require('./webpack.config');

const overrides = {};

module.exports = merge(config, overrides);
