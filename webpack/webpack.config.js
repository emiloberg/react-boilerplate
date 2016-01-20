'use strict'; //eslint-disable-line

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcssNested = require('postcss-nested');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
const PRODUCTION = process.env.NODE_ENV === 'production';

loaders.jsxLoader = DEBUG ? ['react-hot', 'babel-loader'] : ['babel-loader'];

/**
 * The original webpack config makes sure that the selector names
 * (.myClassName, #myId, etc) are unique. This makes it hard to test,
 * so when running in test mode this changes the behaviour so that the
 * selector names are the actual selectors names (and can be tested).
 */
const localIdentName = TEST ? '[local]' : '[name]__[local]___[hash:base64:5]';

const cssBundleFilename = PRODUCTION ? 'bundle.[contenthash].css' : 'bundle.css';
const jsBundleFilename = PRODUCTION ? 'bundle.[hash].js' : 'bundle.js';

const plugins = [
	new CleanWebpackPlugin(['dist'], {
		root: path.join(__dirname, '..')
	}),
	new webpack.DefinePlugin({
		DEBUG: JSON.stringify(DEBUG),
		TEST: JSON.stringify(TEST),
		PRODUCTION: JSON.stringify(PRODUCTION),
		'process.env': {
			NODE_ENV: JSON.stringify(process.env.NODE_ENV)
		}
	}),
	new ExtractTextPlugin(cssBundleFilename, { allChunks: true })
];
if (DEBUG) {
	plugins.push(new webpack.HotModuleReplacementPlugin());
} else if (PRODUCTION) {
	plugins.push(new HtmlWebpackPlugin({
		title: 'React Boilerplate',
		filename: 'index.html',
		template: 'index.prod.html'
	}));
	plugins.push(new webpack.optimize.DedupePlugin());
	plugins.push(new webpack.optimize.UglifyJsPlugin({
		comments: false
	}));
}

const entry = {
	bundle: ['./src/root']
};
if (DEBUG) {
	entry.bundle.push('webpack-dev-server/client?http://localhost:3000');
	entry.bundle.push('webpack/hot/only-dev-server');
}

const devtool = DEBUG || TEST ? 'eval-source-map' : 'source-map';

const externals = {};
if (PRODUCTION) {
	externals.react = 'React';
	externals.immutable = 'Immutable';
}

module.exports = {
	devtool,
	entry,
	output: {
		path: path.join(__dirname, '../dist'),
		filename: jsBundleFilename,
		publicPath: '/'
	},
	plugins,
	externals,
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
			Index: 'src/index.prod.jsx',
			'react-dom': 'node_modules/react-dom/dist/react-dom.min'
		},
		extensions: ['', '.js', '.json', '.jsx', '.scss']
	},
	postcss: [
		postcssNested,
		autoprefixer()
	]
};
