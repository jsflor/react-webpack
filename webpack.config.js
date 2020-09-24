const { merge } = require('webpack-merge');

const commonConfig = env => require("./build-utils/webpack.common")(env);
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/loadPresets");

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
    console.log(mode, presets);
    return merge(
        commonConfig(mode),
        modeConfig(mode),
        presetConfig({ mode, presets })
    );
}
