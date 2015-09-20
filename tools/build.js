/* global require */

var fs = require('fs');
var UglifyJS = require('uglify-js');
var config = require('./build.config.js');

var loadedFiles = [];

function loadFile(path, file) {
  return fs.readFileSync(path + file + '.js', 'utf8');
}

config.input.forEach(function(fileGroup) {
  if (fileGroup.text) {
    return loadedFiles.push(fileGroup.text);
  }

  if (fileGroup.callback) {
    fileGroup.files.forEach(function(file, index, list) {
      loadedFiles.push(fileGroup.callback(loadFile(fileGroup.path, file), index, list));
    });
  } else {
    fileGroup.files.forEach(function(file) {
      loadedFiles.push(loadFile(fileGroup.path, file));
    });
  }
});

fs.unlink(config.output, function() {
  loadedFiles.forEach(function(data) {
    fs.appendFileSync(config.output, data);
  });
  fs.unlink(config.outputMinified, function() {
    fs.appendFileSync(config.outputMinified, '/* Clarity.js Copyright 2015 Jakub Szczepaniak */\n');
    fs.appendFileSync(config.outputMinified, UglifyJS.minify(config.output).code);
  });
});
