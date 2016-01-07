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

/**
 * Modify the css loader
 * The original webpack config makes sure that the selector names
 * (.myClassName, #myId, etc) are unique. This makes it hard to test,
 * so when running in test mode this changes the behaviour so that the
 * selector names are the actual selectors names (and can be tested).
 */
config.module.loaders[1].loader = 'style!css-loader?modules&importLoaders=1&localIdentName=[local]!postcss-loader';

module.exports = merge(config, overrides);
