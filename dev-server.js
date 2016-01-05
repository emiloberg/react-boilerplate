'use strict';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const DEBUG = process.env.NODE_ENV === 'development';
const TEST = process.env.NODE_ENV === 'test';

let config;
if (DEBUG || TEST) {
	config = require('./webpack/webpack.config.dev');
} else {
	config = require('./webpack/webpack.config.prod');
}

new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true
}).listen(3000, '0.0.0.0', function (err, result) {
	if (err) {
		console.log(err);
	}

	const friendlyMode = (DEBUG || TEST) ? 'DEBUG' : 'PRODUCTION';
	console.log('Starting in ' + friendlyMode + ' mode');
	console.log('Listening at localhost:3000');
});
