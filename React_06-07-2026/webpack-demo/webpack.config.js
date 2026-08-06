const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

  mode: "development",

  entry: "./src/05-08-2026/index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  module: {
    rules: [

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
      },

    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],

  devServer: {
    static: "./dist",
    port: 5050,
    open: true,
    hot: true,
  },
};