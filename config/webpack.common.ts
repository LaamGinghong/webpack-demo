import { Configuration } from 'webpack'
import { resolve } from 'path'
import WebpackBar from 'webpackbar'
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import { PROJECT_NAME, PROJECT_ROOT } from '../constant/env'

const configuration: Configuration = {
  context: resolve(PROJECT_ROOT),
  output: {
    path: resolve(PROJECT_ROOT, 'dist'),
    filename: '[name].[chunkhash].bundle.js',
    chunkFilename: '[name].[chunkhash].bundle.js',
    hashSalt: PROJECT_NAME,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'babel-loader', exclude: /node_modules/ }],
  },
  plugins: [
    new WebpackBar(),
    new FriendlyErrorsWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      minify: false,
      title: PROJECT_NAME,
      template: resolve(PROJECT_ROOT, 'template', 'index.html'),
    }),
  ],
}

export default configuration
