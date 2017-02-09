const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  devServer: {
    contentBase: path.resolve(__dirname, './www')
  },
  module: {
    loaders: [
      // jsx
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      // styles
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  entry: {
    index: './index.jsx'
  },
  output: {
    path: path.resolve(__dirname, './www'),
    filename: '[name].min.js',
  },
};
