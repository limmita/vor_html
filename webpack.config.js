const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


let conf = {
	entry: './src/index.js',
 	output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/'
  },
  devServer:{
  	overlay: true
  },
  module:{
  	rules: [
		  {
		    test: /\.js$/,
		    exclude: /(node_modules|bower_components)/,
		    loader: 'babel-loader'
		  },
		  {
		    test: /\.css$/,
		    use: [
		        'style-loader',
		       	'css-loader'
	        ]
		  }
		]
  }
};

module.exports = (env, options) => {
	let production = options.mode === 'production';

	conf.devtool = production
					? false
					: 'eval-sourcemap';
	return conf;

};