const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ThemeWatcher = require("@salla.sa/twilight/watcher.js");
const path = require("path");

module.exports = {
  entry: {
    app: ["./src/assets/styles/app.scss", "./src/assets/js/app.js"],
  },
  output: {
    path: path.resolve(__dirname, "public"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { url: false } },
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new ThemeWatcher(),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
  ],
};
