const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Dotenv = require('dotenv-webpack');
const fs = require('fs');

// Check if favicon exists to avoid the error
const faviconPath = path.resolve(__dirname, 'src/assets/favicon.ico');
const faviconExists = fs.existsSync(faviconPath);

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
        client: {
            overlay: true,
        },
    },
    module: {
        rules: [
            // Load CSS files and modules
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            // Load fonts
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            // Load images
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            // Support for favicon
            {
                test: /\.ico$/,
                type: 'asset/resource',
            }
        ],
    },
    plugins: [
        // Generate index.html file with conditional favicon
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: 'src/index.html',
            // Only include favicon if it exists
            ...(faviconExists ? { favicon: 'src/assets/favicon.ico' } : {}),
        }),
        // Extract CSS into separate files
        new MiniCssExtractPlugin({
            filename: '[name][contenthash].css',
        }),
        // Load environment variables
        new Dotenv(),
        // Analyze bundle size
        // new BundleAnalyzerPlugin(),
    ],
    stats: {
        children: true,
    },
};
