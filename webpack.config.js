const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  watch: true,
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ],
};