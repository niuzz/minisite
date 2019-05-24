const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
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
    // new CopyWebpackPlugin([{ from: "./src/assets", to: "images" }])
  ]
};
