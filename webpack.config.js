const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module:{
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader',exclude: /node_modules/},
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {test: /\.css$/, use: [
        {loader:'style-loader'}, 
        {
          loader:'css-loader',
          options:{
            importLoaders: 1,
            modules: true,
            localIdentName: '[name]__[local]__[hash:base64:5]'
          }
        }
      ]},
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader?limit=8000&name=images/[name].[ext]'
    }
    ]
  },
  devServer:{
    port: 4000
  },
  plugins: [
    new htmlWebpackPlugin({template: './public/index.html'})
  ]

}