
var HTMLWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/index.html',
    filename: 'index.html',
    inject: 'body'
});
const config = {
    entry: __dirname + '/src/client/index.jsx',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build',
        publicPath: '/'
    },
    plugins: [
        HTMLWebpackPluginConfig,
    ]
};

module.exports = config;