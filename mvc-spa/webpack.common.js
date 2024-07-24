const path = require("path");

module.exports = {
    entry: {
        vendor: "./src/vendor.js",
        main: {
            dependOn: "vendor",
            import: "./src/app.js",
        },
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: "style-loader", // inject CSS to page
                    },
                    {
                        loader: "css-loader", // translates CSS into CommonJS modules
                    },
                    {
                        loader: "postcss-loader", // Run postcss actions
                    },
                    {
                        loader: "sass-loader", // compiles Sass to CSS
                    },
                ],
            },
        ],
    },
};
