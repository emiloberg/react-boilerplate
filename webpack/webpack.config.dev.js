const merge = require('deepmerge');

const config = require('./webpack.config');

const overrides = {
	preLoaders: [{
		test: /\.js$/,
		loader: 'eslint-loader',
		exclude: /node_modules/
	}],
	resolve: {
		alias: {
			Index: 'src/index.dev.jsx'
		}
	}
};

module.exports = merge(config, overrides);
