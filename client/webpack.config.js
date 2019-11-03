const path = require('path');
const webpack = require('webpack');
const env = require('dotenv').config();
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = path.resolve(__dirname, 'src');
const entryPath = path.resolve(rootPath, 'index.js');
const outputPath = path.resolve(__dirname, 'dist');
const modeEnv = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
    entry: ['regenerator-runtime', entryPath],
    mode: modeEnv,
    output: {
        filename: modeEnv === 'development' ? '[name].js' : '[name]-[chunkhash].js',
        path: outputPath,
        publicPath: process.env.NODE_ENV === 'production' ? '/static' : '/',
    },
    devServer: {
        historyApiFallback: true,
        port: 3300,
    },
    resolve: {
        alias: {
            root: path.resolve(__dirname, 'src'),
            sections: path.resolve(__dirname, 'src/sections'),
            constants: path.resolve(__dirname, 'src/constants'),
            components: path.resolve(__dirname, 'src/components'),
            modules: path.resolve(__dirname, 'src/modules'),
            hoc: path.resolve(__dirname, 'src/hoc'),
            context: path.resolve(__dirname, 'src/context'),
            styles: path.resolve(__dirname, 'src/styles'),
        },
        extensions: ['.jsx', '.js', '.less', '.css', '.json', '.svg', '.gif', '.jpg'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                enforce: 'pre',
                exclude: /node_modules/,
                use: {
                    loader: 'eslint-loader',
                    options: {
                        emitWarning: true,
                        configFIle: './.eslintrc',
                    },
                },
            },
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-class-properties'],
                    },
                },
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|otf|svg|gif|jpe?g)$/,
                use: [
                    {
                        loader: 'url-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html',
            favicon: 'public/icon.png',
        }),
        new webpack.EnvironmentPlugin(env.parsed),
    ],
    optimization: {
        splitChunks: {
            name: true,
            chunks: 'all',
            minSize: 300,
            maxAsyncRequests: Infinity,
            maxInitialRequests: 10,
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    priority: -1,
                },
            },
        },
    },
};
