module.exports = {
	context: __dirname + '/app',
	entry: {
		app: './src/app.js',
		index: './index.html'
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/dist'
	},
	resolve: {
		extensions: ['.js','.jsx','.json','.html']
	},
	module:{
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loaders: ['react-hot-loader','babel-loader']
			},
			{
				test: /\.html$/,
				exclude: /node_modules/,
				loader: 'file-loader?name=[name].[ext]'
			}
		]
	}
};
