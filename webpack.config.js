/**
 * UI KIT
 * 
 * webpack.config.js
 * configuration file for UI Kit
 */

const webpack = require('webpack');

const path = require('path');
const pathResolve = (loc) => path.resolve(__dirname, loc);

/**
 * PLUGINS
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
  title: 'UI Kit', // change this to modify the page title
  template: 'src/index.ejs',
});

const scssExtractPlugin = new ExtractTextPlugin({
  filename: 'style.bundle.[hash].css',
  allChunks: true,
  disable: process.env.NODE_ENV !== 'production',
});

/**
 * CONFIGURATION
 */

const webpackConfig = {
  entry: pathResolve('src/app.js'),
  output: {
    path: pathResolve('dist'),
    filename: 'app.bundle.[hash].js',
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            'sass-loader'
          ],
          // fallback for production
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },

  plugins: [
    htmlPlugin,
    scssExtractPlugin,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],

  devServer: {
    hot: true,
    open: true,
    stats: 'errors-only',
  },
};

module.exports = webpackConfig;