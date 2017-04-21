const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const SRC = path.resolve(__dirname);
const DEST = path.resolve(SRC, 'dist');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const APP_PORT = 8080;
const FE_PORT = 3000;

const PATHS = {
  dist: path.resolve(__dirname, './dist')
};

module.exports = function (env){
  return {
    entry: [
      SRC + '/app/index.js',
      `webpack-dev-server/client?http://0.0.0.0:${FE_PORT}/`
    ],
    output: {
      filename: 'bundle.js',
      path: PATHS.dist,
      publicPath: 'http://localhost:3000/js/',
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {test: /\.ttf$/, loader: 'url-loader?name=fonts/[name].[ext]'},

        {
          test: /\.jsx?$/,  // Notice the regex here. We're matching on js and jsx files.
          use: ['babel-loader'],
          include: SRC
        },

        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'API_HOST': '"http://www.test.com"',
        'API_PORT': '"8080"',
      })
    ]
  }
};
