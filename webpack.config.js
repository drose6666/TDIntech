// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


const config = {
    entry: {
        index: './src/js/index.js',
        // soft: './src/js/soft.js',
    },

    output: {
        filename: "js/[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },

    devtool: 'source-map',

    devServer: {
        watchFiles: ['src/**/*.*', 'src/assets/**/*.*'],
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, 'src'),
            watch: true,
        },
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css", // Пока используем обычное имя для стилей
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets' },
            ],
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.pug",
            chunks: ["index"],
        }),
        // new HtmlWebpackPlugin({
        //     filename: "soft.html",
        //     template: "./src/soft.pug",
        //     chunks: ["soft"],
        // }),
        new CleanWebpackPlugin(),
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true, // Не минифицировать HTML в режиме production
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                config: path.resolve(__dirname, "postcss.config.js"),
                            },
                        },
                    },
                    'sass-loader'],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|webp|ico|gif)$/,
                type: "asset/resource",
                generator: {
                    filename: "assets/img/[name][ext]",
                },
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    return config;
};
