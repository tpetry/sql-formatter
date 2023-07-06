const webpack = require('webpack');
const path = require('path');

const config = {
    entry: './main.js',
    output: {
    	path: path.resolve(__dirname, './build'),
    	filename: './plugin.js',
    },
    mode: 'production',
};

module.exports = config;
