const path = require('path');
const webpack = require('webpack');
const env = require('dotenv').config();
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = path.resolve(__dirname, 'src');
const entryPath = path.resolve(rootPath, 'index.tsx');
const outputPath = path.resolve(__dirname, 'dist');
const modeEnv = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
    entry: ['regenerator-runtime', entryPath],
    mode: modeEnv,
    devtool: 'source-map',
    output: {
        filename: modeEnv === 'development' ? '[name].js' : '[name]-[chunkhash].js',
        path: outputPath,
        publicPath: '/',
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
            store: path.resolve(__dirname, 'src/store'),
            styles: path.resolve(__dirname, 'src/styles'),
            tests: path.resolve(__dirname, 'src/tests'),
        },
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.less', '.css', '.json', '.svg', '.gif', '.jpg'],
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
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
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
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
