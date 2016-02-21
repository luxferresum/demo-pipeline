"use strict";

var Funnel = require('broccoli-funnel')
var MergeTrees = require('broccoli-merge-trees')
var rollupPluginBabel = require('rollup-plugin-babel');
var rollup = require('broccoli-rollup');

var js = new Funnel('src');

js = rollup(js, {
	inputFiles: ['**/*.js'],
	rollup: {
		entry: 'index.js',
		dest: 'script.js',
		plugins: [rollupPluginBabel({
			presets: ['es2015-rollup']
		})]
	}
});

var staticFiles = new Funnel('static');

module.exports = MergeTrees([js, staticFiles]);