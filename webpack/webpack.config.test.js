const merge = require('deepmerge');

const config = require('./webpack.config');

delete config.entry;
delete config.output;
delete config.plugins;

const overrides = {
	devtool: 'inline-source-map',
	module: {
		preLoaders: [
		{
			test: /\.jsx?$/,
			exclude: [/node_modules/, /\.spec\.jsx?/],
			loader: 'isparta-instrumenter-loader'
		},
		{
			test: /\.jsx?$/,
			loader: 'eslint-loader',
			exclude: /node_modules/
		}]
	}
};

module.exports = merge(config, overrides);
