/**
 * Created by jf on 15/10/27.
 */

var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'example/app.js')
    ],
    output: {
        path: path.resolve(__dirname, 'example'),
        publicPath: '/',
        filename: './bundle.js'
    },
    module: {
        loaders:[
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }, {
                test: /\.less$/,
                loader: 'style!css!autoprefixer!less'
            }, {
                test: /\.css/,
                loader: 'style!css'
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: false
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    ]
};
