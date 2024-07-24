const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const { htmlPluginOptions } = require("./webpack.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    output: {
        filename: "[name].bundle.js",
    },
    plugins: [new HtmlWebpackPlugin(htmlPluginOptions["main"])],
});
