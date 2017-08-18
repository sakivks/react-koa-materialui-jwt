var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: { index: ["./public/index"], home: ["./public/home"] },
  output: { path: path.join(__dirname, "public/dist"), filename: "bundle_[name].js", publicPath: path.join(__dirname, "public") },
  plugins: [new webpack.DefinePlugin({ "process.env": { NODE_ENV: JSON.stringify("production") } })],// new webpack.optimize.UglifyJsPlugin()],
  module: {
    loaders: [{ test: /\.js$/, loaders: ["babel-loader"], exclude: /node_modules/, include: __dirname }]
  }
};
