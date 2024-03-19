const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './client'),
        filename: 'bundle[fullhash].js',
        clean: true
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './client'),
        },
        compress: true,
        port: 5550,
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }),
    new MiniCssExtractPlugin({ filename: 'styles-[fullhash].css' })],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use:
            {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env',
                    ]
                }
            }
        },
        {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader'
            ]

        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: ('file-loader'),
                },
            ],
        },
        {
            test: /\.(ttf|otf|eot|woff|woff2)$/i,
            use: [
                {
                    loader: ('file-loader'),
                },
            ],
        }

        ],

    },
};