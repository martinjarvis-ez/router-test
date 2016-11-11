'use strict';

let path = require('path');

module.exports = {
  path: path.join(process.cwd(), 'lib'),
  filename: '[name].bundle.js',
  library: 'easyjet-angular2-poc',
  libraryTarget:'commonjs'
};
