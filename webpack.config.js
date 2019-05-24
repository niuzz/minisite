const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {},

    // 代码模块路径
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src')    
        ],

        extensions: ['.js', '.json', 'jsx'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'assets/index.html'
        })
    ]
}
