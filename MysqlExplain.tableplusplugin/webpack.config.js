const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

const config = {
    entry: {
        'plugin.js': './plugin/index.js',
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: "ui/index.html", to: "ui.html" }],
        }),
    ],
    output: {
    	path: path.resolve(__dirname, './build'),
    	filename: '[name]',
    },
};

module.exports = config;
