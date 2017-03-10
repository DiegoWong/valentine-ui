const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const SRC = path.resolve(__dirname);
const DEST = path.resolve(SRC, 'dist');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

function extendWebpackConfig(base, configs) {
  const target = process.env.npm_lifecycle_event;

  const keyPairs = Object.keys(configs).reduce((acc, key) => {
    key.trim().split(/\s*,\s*/).forEach((t) => acc[t] = key);

    return acc;
  }, {});

  return keyPairs.hasOwnProperty(target) ? merge(base, configs[keyPairs[target]]) : base;
}

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
  }
};

module.exports = extendWebpackConfig(common, environmentConfigs);