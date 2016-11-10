var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'example'),
    entry: {
        js: './app.js',
        vendor: ['react', 'classnames', 'react-router', 'react-dom', 'react-addons-css-transition-group', 'mobile-detect']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundle.js'
    },
    module: {
        loaders:[
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    //faster recompile
                    //https://github.com/babel/babel-loader#options
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-2', 'react'],
                    //add-module for old commonJS behavir
                    //https://github.com/babel/babel/issues/2212
                    plugins: ['transform-class-properties', 'add-module-exports']
                }
            }, {
                test: /\.less$/,
                loader: 'style!css!postcss!less'
            }, {
                test: /\.css/,
                loader: ExtractTextPlugin.extract('style', 'css', 'postcss')
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000'
            }
        ]
    },
    postcss: [autoprefixer],
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin('weui.min.css'),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: false
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'example/index.html')
        }),
    ]
};