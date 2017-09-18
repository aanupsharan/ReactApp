const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    context: __dirname + '/app',
    entry: {
        app: './js/app.js',
        index: './index.html',
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: [name].js,
        publicPath: '/dist/'
    },
    resolve:{
        extensions: ['.js','.jsx','.json','.html']
    },
    plugins:[
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        }),
        new webpack.DefinePlugin({
            'process.env' : {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    module:{
        loaders:[
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader','babel-loader']
            },
            {
                test: /\.html$/,
                exclude: '/node_modules/',
                loader: 'file-loader?name=[name].[ext]'
            }
        ]
    }
}
