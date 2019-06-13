const path = require('path')

module.exports = [
  {
    test: /\.ts(x?)$/,
    use: [
      {
        loader: 'awesome-typescript-loader',
        options: {
          useCache: true,
          cacheDirectory: path.resolve(__dirname, '../../.cache-loader'), // ts缓存
          babelOptions: {
            babelre: false,
            plugins: ['react-hot-loader/babel']
          }
        }
      }
    ]
  }
]
