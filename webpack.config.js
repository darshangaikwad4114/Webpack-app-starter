// this is used to import the path module
const path = require('path')

// this is used to import the html-webpack-plugin module
const HtmlWebpackPlugin = require('html-webpack-plugin')

// const BundleAnalyzerPlugin =
//     require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// this is used to export the webpack configz
module.exports = {
    // this is used to set the mode of the webpack
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    // this is used to generate the stats file 
    stats: {
        children: true,
    },
    // this is used to generate the bundle file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    // this is used to generate the source map
    devtool: 'source-map',
    // this is used to serve the files from the dist folder
    devServer: {
        // this is used to serve the files from the dist folder
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        // this is used to open the browser automatically
        // port: 3000,
        // open: true,
        // hot: true,
        // compress: true,
        // historyApiFallback: true,
    },
    // this is used to resolve the extensions of the files
    module: {
        rules: [
            // this rule is used to load css files and modules 
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            // this rule is used to load fonts
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    // this is used to load the babel config
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            // this rule is used to load images
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    // this is used to resolve the extensions of the files
    plugins: [
        // this plugin is used to generate the index.html file
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: 'src/index.html',
        }),
        // this plugin is used to analyze the bundle size
        // new BundleAnalyzerPlugin(),
    ],
}
