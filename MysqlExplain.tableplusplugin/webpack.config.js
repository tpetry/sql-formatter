const path = require('path');

const config = {
    entry: './plugin/index.js',
    mode: 'production',
    output: {
    	path: path.resolve(__dirname, './build'),
    	filename: 'plugin.js',
    },
};

module.exports = config;
