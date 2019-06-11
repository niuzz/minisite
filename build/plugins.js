const HtmlwebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = [
  new HtmlwebpackPlugin({
    template: "public/index.html",
    minify: { // 压缩选项
      removeComments: true, // 删除注释
      collapseWhitespace: true, // 删除空格
      removeAttributeQuotes: true // 删除属性引号
    }
  }),
  new MiniCssExtractPlugin({
    filename: "css/[name].[hash].css"
  }),
  new CleanWebpackPlugin()
];
