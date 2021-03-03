const { join, resolve } = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  entry: [join(__dirname, 'src/index.ts')],
  output: {
    filename: 'index.js',
    path: resolve(__dirname, 'dist'),
  },
  externals: [nodeExternals()],
  resolve: {
    alias: {
      '@src': resolve(__dirname, 'src'),
      '@middlewares': resolve(__dirname, 'src/middlewares'),
      '@schema': resolve(__dirname, 'src/schema'),
      '@utils': resolve(__dirname, 'src/utils'),
    },
    extensions: ['.ts', '.js', '.graphql', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(graphql|gql)$/,
        use: '@graphql-tools/webpack-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
