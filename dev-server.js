'use strict';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const PROD = JSON.parse(process.env.PROD || false);
const ENVIRONMENT = PROD ? 'prod' : 'dev';

let config;
if (ENVIRONMENT === 'prod') {
	config = require('./webpack.config.prod');
} else {
	config = require('./webpack.config.dev');
}

new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true
}).listen(3000, '0.0.0.0', function (err, result) {
	if (err) {
		console.log(err);
	}

	console.log('Starting in ' + ENVIRONMENT + ' mode');
	console.log('Listening at localhost:3000');
});
