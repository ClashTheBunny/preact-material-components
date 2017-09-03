/* globals require, __dirname, module */
const webpack = require("webpack");
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractCSS = new ExtractTextPlugin('[name].css');

const config = {
	entry: {
	 app: './src/app.jsx',
	 vendor: ['react', 'react-dom']
	},
	output: {
		path: __dirname + '/public',
		publicPath: '/public/',
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.txt$/,
				loader: 'raw-loader'
			},
			{
				loader: 'babel-loader',
				test: /\.(js|jsx)$/,
				options: {
					plugins:[
						"transform-object-rest-spread"
					]
				}
			},
			{
				test: /\.css$/,
				loader: extractCSS.extract({
					fallback: 'style-loader',
					use: ['css-loader','postcss-loader']
				})
			}
		]
	},
	plugins: [
    new webpack.ProvidePlugin({
      "React": "react",
    }),
		new CleanWebpackPlugin('./public'),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: 2
		}),
		extractCSS
	]
};

module.exports = config;
