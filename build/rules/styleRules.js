const path = require('path')
const MiniCssEctractPlugin = require('mini-css-extract-plugin')

module.exports = [
  {
    test: /\.scss$/,
    include: [path.resolve(__dirname, '../../src')],
    use: [
      // "style-loader", // css 分离 用mini-css-extract-plugin代替
      MiniCssEctractPlugin.loader,
      {
        loader: 'cache-loader',
        options: {
          cacheDirectory: path.resolve(__dirname, '../../.cache-loader') // css缓存
        }
      },
      {
        loader: 'typings-for-css-modules-loader',
        options: {
          modules: true,
          namedExport: true,
          camelCase: true,
          sass: true
        }
      },
      {
        loader: 'sass-loader',
        options: {
          includePaths: [path.resolve(__dirname, 'src/sass')] // 优化include sass文件路径
        }
      }
    ]
  }
]
