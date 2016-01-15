'use strict'; //eslint-disable-line

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcssNested = require('postcss-nested');

/**
 * List of node_modules to parse for (S)CSS
 */
const modulesParseCSS = [
	'react-toolbox'
].join('|');

const loaders = {
	jsxLoader: []
};

const DEBUG = process.env.NODE_ENV === 'development';
const TEST = process.env.NODE_ENV === 'test';

loaders.jsxLoader = DEBUG ? ['react-hot', 'babel-loader'] : ['babel-loader'];

/**
 * The original webpack config makes sure that the selector names
 * (.myClassName, #myId, etc) are unique. This makes it hard to test,
 * so when running in test mode this changes the behaviour so that the
 * selector names are the actual selectors names (and can be tested).
 */
const localIdentName = TEST ? '[local]' : '[name]__[local]___[hash:base64:5]';

const plugins = [
	new ExtractTextPlugin('bundle.css', { allChunks: true })
];
if (DEBUG) {
	plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = {
	devtool: 'eval-source-map',
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./src/root'
	],
	output: {
		path: path.join(__dirname, '../dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: plugins,
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loaders: loaders.jsxLoader,
			exclude: /node_modules/
		}, {
			test: /(\.scss|\.css)$/,
			loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=' + localIdentName + '!postcss-loader!sass?sourceMap!toolbox'),
			exclude: new RegExp('node_modules\/(?!' + modulesParseCSS + ')')
		}]
	},
	toolbox: {
		theme: path.join(__dirname, '../src/style/toolbox-theme.scss')
	},
	resolve: {
		root: path.resolve(__dirname, '..'),
		alias: {
			components: 'src/components',
			reducers: 'src/reducers',
			utils: 'src/utils',
			store: 'src/store',
			style: 'src/style',
			ducks: 'src/ducks',
			Index: 'src/index.prod.jsx'
		},
		extensions: ['', '.js', '.json', '.jsx', '.scss']
	},
	postcss: [
		postcssNested,
		autoprefixer()
	]
};
