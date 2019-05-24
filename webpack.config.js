const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",

  output: {
    // publicPath: '/dist/',
    // contentBase: './dist',
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js?v=[hash]"
  },

  devServer: {
    port: 3000,
    open: true
    // hot: true, //配上反而不能自动刷新
    // hotOnly:true
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        include: [path.resolve(__dirname, "src")],
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, "src")],
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader",
          publicPath: "./images" // css 引用图片路径
        })
      },
      {
        test: /\.(scss|sass)$/,
        include: [path.resolve(__dirname, "src")],
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: [
                  require("postcss-pxtorem")({
                    rootValue: 32,
                    propList: ["*"],
                    // 注意：如果有使用第三方UI如VUX，则需要配置下忽略选择器不转换。
                    // 规则是class中包含的字符串，如vux中所有的class前缀都是weui-。也可以是正则。
                    selectorBlackList: ["weui-"]
                  })
                ]
              }
            },
            "sass-loader"
          ]
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images"
            }
          },
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true
            }
          }
        ]
      }
    ]
  },

  optimization: {
    namedModules: true //用于启动 HMR 时显示模块的相对路径 4 废除了插件形式
  },

  // 代码模块路径
  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "src")],

    extensions: [".js", ".json", "jsx"]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/public/index.html",
      minify: {
        // 压缩 HTML 的配置
        minifyCSS: true, // 压缩 HTML 中出现的 CSS 代码
        minifyJS: true // 压缩 HTML 中出现的 JS 代码
      }
    }),
    new ExtractTextPlugin("[name].[hash].css"),
    // new webpack.NamedModulesPlugin(), //用于启动 HMR 时显示模块的相对路径 4废除了
    new webpack.HotModuleReplacementPlugin(), // 热替换插件
    // new CopyWebpackPlugin([{ from: "./src/assets", to: "images" }]) // copy img用，html-loader后不再需要
    new CleanWebpackPlugin()
  ],

  devtool: "source-map"
};
