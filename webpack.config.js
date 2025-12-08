const path = require("path");
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
    entry: "./src/client/index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "js/bundle.js",
        publicPath: "/"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    }
}