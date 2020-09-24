const webpack = require('webpack');

module.exports = () => ({
    devtool: "eval-cheap-module-source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [ new webpack.HotModuleReplacementPlugin() ]
});
