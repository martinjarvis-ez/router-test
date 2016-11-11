'use strict';

let path = require('path');
var TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;

module.exports = {
  modules: [
    'node_modules',
    path.resolve(process.cwd(), 'src')
  ],
  extensions: ['.ts', '.js'],
  plugins: [
        new TsConfigPathsPlugin({
          "configFileName": 'tsconfig.libs.json',
          "forkChecker": true,
          "useWebpackText": true
        })
    ]
};
