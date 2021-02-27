const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');

const mode = process.env.NODE_ENV !== 'production' ? 'development' : 'production'

module.exports = {
  mode,
  entry: './main.js',
  output: {
    filename: 'jas-frontend-bonedejesus.js',
    path: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      { test: /\.(png|svg|jpg|gif)$/i, type: 'asset/resource' }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'jas-frontend-bonedejesus.css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { context: 'src/', from: '**/*.html' },
        { from: 'CNAME', to: '.' }
      ]
    })
  ],
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({ parallel: true , terserOptions: { ecma: 6 } }),
      new CssMinimizerWebpackPlugin()
    ]
  },
  devServer: {
    contentBase: './docs',
    port: 9000
  }
}