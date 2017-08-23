var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "cheap-module-eval-source-map",
  entry: {
    index: ["webpack-hot-middleware/client", "./public/index"],
    home: ["webpack-hot-middleware/client", "./public/home"]
  },
  output: { path: path.join(__dirname, "dist"), filename: "bundle_[name].js", publicPath: '/dist' },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    loaders: [{ test: /\.js$/, loaders: ["babel-loader"], exclude: /node_modules/, include: __dirname }]
  }
};

// path.join(__dirname, "dist")