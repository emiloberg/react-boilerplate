const merge = require('deepmerge');

const config = require('./webpack.config');

delete config.entry;
delete config.output;
delete config.plugins;

const overrides = {
	devtool: 'inline-source-map',
	module: {
		preLoaders: [{
			test: /\.js$/,
			loader: 'eslint-loader',
			exclude: /node_modules/
		}],
		postLoaders: [{ //delays coverage til after tests are run, fixing transpiled source coverage error
			test: /\.jsx?$/,
			exclude: /(test|node_modules)\//,
			loader: 'istanbul-instrumenter'
		}]
	}
};

module.exports = merge(config, overrides);
