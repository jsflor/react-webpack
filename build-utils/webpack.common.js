const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (mode) => ({
    mode: mode,
    entry: path.resolve(__dirname, "../src/index.js"),
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, '../src'),
                use: ["babel-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                include: path.resolve(__dirname, '../src'),
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 5000
                        }
                    }
                ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/index.html")
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "../dist"),
        port: 7821,
        hot: true,
        historyApiFallback: true
    },
})
