const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === "development";

  return {
    entry: "./src/index.js",
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "index-bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.json$/,
          loader: "json-loader"
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },
        {
          test: /\.s(a|c)ss$/,
          loader: [
            isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: {
                  mode: "local",
                  localIdentName: isDevelopment
                    ? "[path][name]__[local]--[hash:base64:5]"
                    : "[hash:base64:5]"
                },
                sourceMap: isDevelopment
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: isDevelopment
              }
            }
          ]
        }
      ]
    },
    devServer: {
      historyApiFallback: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      }),
      new MiniCssExtractPlugin({
        filename: isDevelopment ? "[name].css" : "[name].[hash].css",
        chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css"
      }),
      new CopyPlugin([{ from: "src/data.json", to: "dist/data.json" }])
    ]
  };
};
