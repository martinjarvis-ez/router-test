'use strict';

let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  rules: [{
    test: /\.ts$/,
    loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      //use: ['@ngtools/webpack'] // same as ['awesome-typescript', 'angular2-template']
  }, {
    test: /\.html$/,
    use: 'raw'
  }, {
    test: /\.s?css$/,
    include: path.resolve(process.cwd(), 'src', 'app'),
    loaders: ['raw-loader', 'sass-loader']
  }, {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url?limit=10000&mimetype=application/font-woff'
  }, {
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file'
  }]
};
