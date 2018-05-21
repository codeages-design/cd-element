const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  mode: 'production',
  entry: {
    'index': './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'index.min.js',
    library: 'cdvue',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  parser: 'sugarss',
                  exec: true
                }
              }
            ],
            scss: [
              'vue-style-loader',
              'css-loader',
              'postcss-loader',
              'sass-loader'
            ],

          },
          postLoaders: {
            html: 'babel-loader?sourceMap'
          },
          sourceMap: true,
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          sourceMap: true,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: '\'autoprefixer-loader\'',
          },
        ]
      },
      {
        test: /\.less$/,
        loaders: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
            },
          },
        ]
      },
      {
        test: /\.(eot|woff|ttf)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            useRelativePath: process.env.NODE_ENV === "production"
          }
        }]
      }
    ]
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  }
}