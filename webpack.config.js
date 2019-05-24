const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');

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
    open: true,
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
          publicPath: './images' // css 引用图片路径
        })
      },
      {
        test: /\.(scss|sass)$/,
        include: [path.resolve(__dirname, "src")],
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
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
        use: [ {
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }],
      }
    ]
  },

  optimization: {
    namedModules: true
  },

  // 代码模块路径
  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "src")],

    extensions: [".js", ".json", "jsx"]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/public/index.html"
    }),
    new ExtractTextPlugin("[name].css"),
    // new webpack.NamedModulesPlugin(), //用于启动 HMR 时显示模块的相对路径 4废除了
     new webpack.HotModuleReplacementPlugin(), // 热替换插件
    // new CopyWebpackPlugin([{ from: "./src/assets", to: "images" }]) // copy img用，html-loader后不再需要
  ]
};
