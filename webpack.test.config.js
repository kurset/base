const webpack =  require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './test/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'base.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 9000,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './test/index.html',
            title: 'dev',
            inject: true
        })
    ]
}