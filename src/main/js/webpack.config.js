const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const SRC = path.resolve(__dirname);
const DEST = path.resolve(SRC, 'dist');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const APP_PORT = 8080;
const FE_PORT = 3000;

function extendWebpackConfig(base, configs) {
  const target = process.env.npm_lifecycle_event;

  const keyPairs = Object.keys(configs).reduce((acc, key) => {
    key.trim().split(/\s*,\s*/).forEach((t) => acc[t] = key);

    return acc;
  }, {});

  return keyPairs.hasOwnProperty(target) ? merge(base, configs[keyPairs[target]]) : base;
}

const PATHS = {
    dist: path.resolve(__dirname, 'js')
};

const common ={

};

const environmentConfigs = {
  build: {
    entry: {
      app: SRC + '/app/index.js',
    },
    devtool: 'inline-source-map',
    output: {
      path: DEST,
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {test: /\.ttf$/, loader: 'url-loader?name=fonts/[name].[ext]'},

        {
          test: /\.jsx?$/,  // Notice the regex here. We're matching on js and jsx files.
          use: ['babel-loader?presets[]=es2015&presets[]=react'],
          include: SRC
        },

        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
        }
      ]
    }
  },
  start: {
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
          use: ['babel-loader?presets[]=es2015&presets[]=react'],
          include: SRC
        },

        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
        }
      ]
    },
    devServer: {
      compress: true,
      historyApiFallback: true,
      publicPath: 'http://localhost:3000/js/',
      host: '0.0.0.0',
      hot: true,
      inline: true,
      port: FE_PORT,
      proxy: {
        '*': `http://localhost:${APP_PORT}`,
      }
    },
    node: {
      net: 'empty',
      tls: 'empty',
      dns: 'empty'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  }
};

module.exports = extendWebpackConfig(common, environmentConfigs);