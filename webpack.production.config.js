var webpack = require('webpack');
var path = require('path');

var config = {
    entry: path.resolve(__dirname, 'example/app.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
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
        }]
    },
    plugins: [

    ]
};

module.exports = config;
