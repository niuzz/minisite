const path = require('path')

const plugins = require('./plugins.js')

const jsRules = require('./rules/jsRules')
const styleRules = require('./rules/styleRules')

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '../src/index.tsx'),

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[hash].js'
  },

  resolve: {
    modules: ['node_modules', path.resolve(__dirname, '../src')],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json')
      })
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 3000,
    open: true,
    overlay: true
  },

  module: {
    rules: [...jsRules, ...styleRules]
  },

  plugins: [...plugins]
}
