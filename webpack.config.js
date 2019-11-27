// used by npm script: npm run server

const HtmlWebpackPlugin = require('html-webpack-plugin');
const NgAnnotatePlugin = require('ng-annotate-webpack-plugin');
const path = require('path');
const glob = require("glob");

module.exports = {
  entry: {
      'app': './src/app.module.js',
      'app-modules': glob.sync('./src/app/**/*.module.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.(html)$/, use: 'html-loader'},
      { test: /\.(scss)$/, use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new NgAnnotatePlugin({
      add: true,
    })
  ]
};
