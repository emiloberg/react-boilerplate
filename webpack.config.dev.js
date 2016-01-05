const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const postcssNested = require('postcss-nested');

module.exports = {
	devtool: 'eval-source-map',
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./src/root'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		preLoaders: [{
			test: /\.js$/,
			loader: 'eslint-loader',
			exclude: /node_modules/
		}],
		loaders: [{
			test: /\.jsx?$/,
			loaders: ['react-hot', 'babel-loader'],
			include: path.join(__dirname, 'src')
		}, {
			test: /\.css$/,
			loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
		}]
	},
	resolve: {
		root: path.resolve(__dirname),
		alias: {
			components: 'src/components',
			actionCreators: 'src/actionCreators',
			constants: 'src/constants',
			actionTypes: 'src/constants/actionTypes',
			state: 'src/constants/state',
			reducers: 'src/reducers',
			utils: 'src/utils',
			store: 'src/store',
			style: 'src/style',
			Index: 'src/index.dev.jsx'
		},
		extensions: ['', '.js', '.json', '.jsx']
	},
	postcss: [
		postcssNested,
		autoprefixer()
	]
};
