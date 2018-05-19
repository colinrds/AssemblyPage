const path = require("path");
const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

var baseConfig = {
    outputPath: path.resolve(__dirname, '../dist/common/login/'),
    entryPath: {
        loginModule: path.resolve(__dirname, '../wp_source/common/login/js/login_module.js')
    },
    publicPath: '//img.sanjieke.cn/common/',
    template: path.resolve(__dirname,'../wp_source/common/login/login_module.html'),
    cssOutput: 'css/[name].css',
    filename: 'login_module.html',
    chunks: ['loginModule']
}


module.exports = {
    entry: baseConfig.entryPath,
    output: {
        path: baseConfig.outputPath,
        filename: 'js/[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            minimize: true
                        }
                    }],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 2048,
                    name: 'login/[name].[ext]',
                    publicPath: baseConfig.publicPath
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    name: 'login/media/[name].[hash:7].[ext]',
                    publicPath: baseConfig.publicPath
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    name: 'login/fonts/[name].[hash:7].[ext]',
                    publicPath: baseConfig.publicPath
                }
            }
        ]
    },
    resolve: {
        alias: {
            'module@': path.resolve(__dirname, '../core/es6')
        },
        extensions: ['.js', '.json', '.css']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: baseConfig.template,
            filename: baseConfig.filename,
            inject: true,
            chunks: baseConfig.chunks,
            minify: {
                removeComments: true, //移除HTML中的注释
            }
        }),
        new ExtractTextPlugin({filename: baseConfig.cssOutput}),
        new UglifyJsPlugin({
            mangle: {
                except: ['$super', '$', 'exports', 'require']
            }
        })
    ]
};