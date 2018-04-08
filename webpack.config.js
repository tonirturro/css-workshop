const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/boot.ts',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: false,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|jpg)$/,
                use: 'file-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/index.html', to: 'index.html' }
        ], {
            copyUnmodified: true 
        })
    ],
    devtool: 'inline-source-map'
}