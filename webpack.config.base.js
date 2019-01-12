var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              url: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        exclude: /node_modules/,
        loader: "url-loader?limit=8000&name=images/[name].[ext]"
      }
    ]
  },
  plugins: [new htmlWebpackPlugin({ template: "./public/index.html" })]
};
