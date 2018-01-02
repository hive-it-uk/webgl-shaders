const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  
  devtool: "inline-source-map",
  
  resolve: {
    modules: [
      'node_modules',
      'src'
    ]
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', {
                "targets": {
                  "browsers": ["last 2 versions", "safari >= 7"]
                }
              }
              ]
            ]
          }
        }
      },
      {
        test: /\.glsl$/,
        loader: "webpack-glsl-loader"
      }
    
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'test',
      inlineSource: '.(js|css)$'
    }),
    new HtmlWebpackInlineSourcePlugin()
  ]
};