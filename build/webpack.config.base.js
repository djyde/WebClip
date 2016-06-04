const autoprefixer = require('autoprefixer')
const nested = require('postcss-nested')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    webclip: './src/index.js'
  },
  output: {
    library: 'WebClip'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss')
      }
    ]
  },
  postcss: function () {
    return [nested, autoprefixer]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
}
