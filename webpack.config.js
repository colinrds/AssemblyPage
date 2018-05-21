const path = require("path");
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        jquery: 'jquery',
        index: __dirname + '/src/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    limit: 2048,
                    name: 'img/[name].[ext]',
                    publicPath: '../'
                }
            },
            {
                test: require.resolve('jquery'),
                use: [{
                   loader: 'expose-loader',
                   options: 'jQuery'
                },{
                   loader: 'expose-loader',
                   options: '$'
                }]
            }
        ]
    },
    // devServer: {
    //     contentBase: path.resolve(__dirname, 'dist'),
    //     host: 'localhost',
    //     port: 8090,
    //     open: true,
    //     hotOnly: true,
    //     hot: true
    // },
    plugins: [
        // new Webpack.ProvidePlugin({
        //     $:'jquery',
        // }),
        // new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: true,
            chunks: ['jquery','index'],
            minify: {
                removeComments: true, //移除HTML中的注释
            }
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ],
    optimization: {
        splitChunks: {
            name: 'jquery'
        }
    }
}