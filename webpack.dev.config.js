var webpack = require('webpack');
const path = require('path');

var exeDirpath = __dirname;
module.exports = {
    mode: "development",
    context: exeDirpath,
    entry: {
        index: exeDirpath + "\\app\\app.jsx"
    },
    output: {
        filename: 'index.js',
        path: path.resolve(exeDirpath, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: ['/node_modules/', '/\.ejs$/']
        }]
    }
};