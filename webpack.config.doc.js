const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = process.argv.indexOf('-p') !== -1;
//const isProduction = nodeEnv === 'production';

const jsSourcePath = path.join(__dirname, 'docs');
const buildPath = path.join(__dirname, 'build/demo/docs');
const sourcePath = path.join(__dirname, 'docs');

// Common plugins
const plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(isProduction ? 'production' : 'development'),
        },
    }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
        template: path.join(sourcePath, 'index.html'),
        path: buildPath,
        filename: 'index.html',
    })
];

// Common rules
const rules = [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
            'ts-loader',
        ],
    },
    {
        test: /\.(js|jsx)$/,
        oneOf: [
            {
                include: [path.resolve(__dirname, 'docs'), path.resolve(__dirname, 'example')],
                exclude: [/node_modules/, path.resolve(__dirname, 'src')],
                use: [
                    'babel-loader',
                ]
            },
            {
                include: path.resolve(__dirname, 'src'),
                exclude: [/node_modules/, path.resolve(__dirname, 'docs')],
                use: [
                    'raw-loader',
                ]
            },
        ],
    }, {
        test: /\.css/,
        loader: [
        'style-loader',
        { loader: 'css-loader', options: { sourceMap: !isProduction, importLoaders: 1 } },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: !isProduction,
            plugins: (loader) => [
                autoprefixer({
                    browsers: [
                        'last 3 version',
                        'ie >= 10',
                    ],
                })
            ]
          }
        }]
    }, {
      test: /\.less$/,
      exclude: /node_modules/,
      use: [
        'style-loader',
        // Using source maps breaks urls in the CSS loader
        // https://github.com/webpack/css-loader/issues/232
        // This comment solves it, but breaks testing from a local network
        // https://github.com/webpack/css-loader/issues/232#issuecomment-240449998
        // 'css-loader?sourceMap',
        { loader: 'css-loader', options: { sourceMap: !isProduction, importLoaders: 2 } },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: !isProduction,
            plugins: (loader) => [
                autoprefixer({
                    browsers: [
                        'last 3 version',
                        'ie >= 10',
                    ],
                })
            ]
          }
        },
        {
            loader: 'less-loader',
            options: {
                sourceMap: !isProduction
            }
        }
      ],
  },
    {
        test: /\.(png|gif|jpg|svg)$/,
        use: 'url-loader?limit=20480&name=assets/[name]-[hash].[ext]',
    }
];

if (!isProduction) {
  plugins.push(
    new webpack.HotModuleReplacementPlugin()
    );
} else {
  //   plugins.push(
  //       new webpack.optimize.UglifyJsPlugin({
  //         compress: {
  //           warnings: false,
  //           screw_ie8: true,
  //           conditionals: true,
  //           unused: true,
  //           comparisons: true,
  //           sequences: true,
  //           dead_code: true,
  //           evaluate: true,
  //           if_return: true,
  //           join_vars: true,
  //         },
  //         output: {
  //           comments: false,
  //         },
  //       })
  // );
}

module.exports = {
  devtool: isProduction ? false : 'source-map',
  mode: 'production',
  context: jsSourcePath,
  entry: {
    js: './app.js',
  },
  output: {
    path: buildPath,
    publicPath: '',
    filename: 'app-[hash].js',
  },
  module: {
    rules,
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.ts', '.tsx', '.js', '.jsx', '.less'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      jsSourcePath,
    ],
  },
  plugins,
  devServer: {
    contentBase: isProduction ? buildPath : sourcePath,
    historyApiFallback: true,
    port: 3000,
    compress: isProduction,
    inline: !isProduction,
    hot: !isProduction,
    host: '0.0.0.0',
    disableHostCheck: true,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m',
      },
    },
  },
};
