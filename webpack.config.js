var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
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
		  reducers: 'src/reducers'
	  },
	  extensions: ['', '.js', '.json', '.jsx']
  }  
};
