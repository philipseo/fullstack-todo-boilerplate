const { merge } = require('webpack-merge');
const { HotModuleReplacementPlugin } = require('webpack');

const base = require('./webpack.base');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  watch: true,
  plugins: [new HotModuleReplacementPlugin()],
});
