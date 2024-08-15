const webpack = require('webpack');
const packageJson = require('./package.json');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  entry: {
    sienna: "./src/entry.ts",
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
          options: {
            minimize: true,
          },
        },
        {
            test: /\.css$/i,
            use: [
              {
                  loader: 'style-loader',
                  options: {
                  injectType: 'singletonStyleTag',
                  },
              },
              MiniCssExtractPlugin.loader,
              {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 1,
                  },
              },
              {
                  loader: 'postcss-loader',
                  options: {
                  postcssOptions: {
                      plugins: [['autoprefixer']],
                  },
                  },
              },
              'raw-loader',
            ],
        },
        {
          test: /\.svg$/,
          use: [
            "raw-loader"
          ]
        }
      ],
  },
  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: false,
    })],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.BannerPlugin({
      banner: `Sienna Accessibility Widget v${packageJson.version}
(c) ${new Date().getFullYear()} ${packageJson.author}
License: ${packageJson.license}
Home Page : ${packageJson.homepage}
Repository: ${packageJson.repository.url}
`,
      entryOnly: true,
    }),
  ],
};
