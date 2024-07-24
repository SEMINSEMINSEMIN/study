const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const { htmlPluginOptions } = require("./webpack.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[contenthash].bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            ...htmlPluginOptions["main"],
            filename: "index.[contenthash].html",
            minify: {
                collapseWhitespace: true,
                removeComments: true,
            },
        }),
    ],
});
