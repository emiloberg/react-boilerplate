const webpack = require('webpack');

module.exports = function (config) {
	config.set({
		browsers: ['PhantomJS'/*'Chrome'*/], //run in Chrome
		singleRun: true, //just run once by default
		frameworks: ['mocha'], //use the mocha test framework
		files: [
			'tests.webpack.js' //just load this file
		],
		plugins: [
			'karma-chrome-launcher',
			'karma-chai',
			'karma-mocha',
			'karma-sourcemap-loader',
			'karma-webpack',
			'karma-coverage',
			'karma-phantomjs-launcher',
			'karma-spec-reporter'
		],
		preprocessors: {
			'tests.webpack.js': ['webpack', 'sourcemap'], //preprocess with webpack and our sourcemap loader
			'!tests.webpack.js': 'coverage'
		},
		reporters: ['spec', 'coverage'], //report results in this format
		webpack: require('./webpack/webpack.config.test'),
		webpackServer: {
			noInfo: true //please don't spam the console when running in karma!
		},
		coverageReporter: {
			type: 'html', //produces a html document after code is run
			dir: 'coverage/' //path to created html doc
		}
	});
};