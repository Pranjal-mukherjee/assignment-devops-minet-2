const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const prod = process.env.NODE_ENV === 'production';

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',  // Use asset/resource for images
        generator: {
          filename: 'assets/images/[name][ext]', // Output images to a specific folder
        },
      },
      {
        test: /\.(pdf)$/,
        type: 'asset/resource',  // Use asset/resource for PDFs
        generator: {
          filename: 'assets/files/[name][ext]', // Output PDFs to a specific folder
        },
      },
      {
        test: /\.(ico|png|jpg|jpeg)$/i,
        type: 'asset/resource',  // Use asset/resource for other image formats
        generator: {
          filename: 'assets/images/[name][ext]', // Output images to a specific folder
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
    publicPath: '/',  // Add publicPath to resolve potential issues with the HTML file
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    static: './public',
    hot: true,
    open: true,
    allowedHosts: "all",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './public/index.html'),
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new Dotenv(),
  ],
  stats: 'errors-only',
};
