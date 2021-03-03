const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const DotEnvWebpack = require('dotenv-webpack');

module.exports = {
  entry: path.resolve(__dirname, './src/index.tsx'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: { transpileOnly: true },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: 'app.css' }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html'),
      filename: path.join(__dirname, './dist/index.html'),
    }),
    new ForkTsCheckerWebpackPlugin({
      async: true,
      typescript: { configFile: path.join(__dirname, '/tsconfig.json') },
      logger: { infrastructure: 'silent', issued: 'console' },
    }),
    new ESLintWebpackPlugin({
      context: path.resolve(__dirname, './src'),
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
    new DotEnvWebpack()
  ],
};
