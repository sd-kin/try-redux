var path  = require('path')
var webpack = require('webpack')
module.exports  = {
  mode: 'development',
  devtool:  'cheap-module-eval-source-map',
  entry:  [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname,  'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins:  [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        include: path.resolve(__dirname,  "src")
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-0'],
            plugins:  ['transform-runtime', "react-hot-loader/babel"],
          }
        }
      }
    ]
  }
}