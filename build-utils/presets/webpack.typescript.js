const path = require("path");

module.exports = () => ({
    module: {
        rules: [
            {
                test: /\.(tsx?)$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, "../../src"),
                use: "ts-loader"
            }
        ]
    }
});
