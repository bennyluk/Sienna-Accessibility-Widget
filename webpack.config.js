const webpack = require('webpack');
const packageJson = require('./package.json');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    const isDevelopment = argv.mode === 'development';

    return {
        mode: argv.mode,
        entry: {
            sienna: './src/entry.ts'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].min.js',
            library: {
                name: 'SiennaAccessibility',
                type: 'umd'
            },
            globalObject: 'this'
        },
        resolve: {
            extensions: ['.ts', '.js', '.json'],
            alias: {
                '@': path.resolve(__dirname, './')
            }
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
                        minimize: true
                    }
                },
                {
                    test: /\.css$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [['autoprefixer']]
                                }
                            }
                        },
                        'raw-loader'
                    ]
                },
                {
                    test: /\.svg$/,
                    use: ['raw-loader']
                }
            ]
        },
        optimization: {
            minimizer: [
                new TerserPlugin({
                    extractComments: false
                })
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[id].css'
            }),
            new webpack.BannerPlugin({
                banner: `Sienna Accessibility Widget v${packageJson.version}
(c) ${new Date().getFullYear()} ${packageJson.author}
License: ${packageJson.license}
Home Page : ${packageJson.homepage}
Repository: ${packageJson.repository.url}
`,
                entryOnly: true
            }),
            isDevelopment &&
                new HtmlWebpackPlugin({
                    template: './demo.html',
                    inject: 'body'
                })
        ].filter(Boolean), // Filter out false values (i.e., null or undefined)
        devServer: {
            static: {
                directory: path.join(__dirname, 'dist')
            },
            compress: true,
            port: 9000,
            hot: true,
            open: true
        }
    };
};
