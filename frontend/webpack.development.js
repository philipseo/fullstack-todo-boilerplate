const path = require('path');
const { merge } = require('webpack-merge');

const base = require('./webpack.base');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    host: 'localhost',
    port: '3000',
    headers: { 'Access-Control-Allow-Origin': '*' },
    publicPath: '/',
    clientLogLevel: 'silent',
    historyApiFallback: true,
    hot: true,
    inline: true,
    compress: true,
    overlay: false,
    open: true,
  },
});
