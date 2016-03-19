var webpack = require("webpack");

new webpack.DefinePlugin({
  "process.env": {
    NODE_ENV: JSON.stringify("production")
  }
});

module.exports = {
  entry: "./index",
  output: {
    filename: "dist/js/browser-bundle.js"
  },
  devtool: "source-map",
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ["es2015", "react"]
        }
      },
    ]
  }
};
