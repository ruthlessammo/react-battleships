const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/App',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
    }, {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
    }],
  },
  plugins: [
   new HtmlWebpackPlugin({template: './src/index.html'})
 ]
};
