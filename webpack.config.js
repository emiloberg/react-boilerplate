const path = require('path');
const webpack = require('webpack');

const __DEV__ = JSON.parse(process.env.DEBUG || false);
const ENVIRONMENT = __DEV__ ? 'dev' : 'prod';

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
		loaders: [{
			test: /\.jsx?$/,
			loaders: ['react-hot', 'babel-loader'],
			include: path.join(__dirname, 'src')
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
			envSpecific: 'src/envSpecific/' + ENVIRONMENT
		},
		extensions: ['', '.js', '.json', '.jsx']
	}
};
