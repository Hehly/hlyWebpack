const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // 模式 development production
  entry: "./src/index.js",
  output: {
    // path: path.resolve(__dirname, "dist"), // 绝对路径 两种写法 path 指定
    path: path.join(__dirname, "dist"),
    // filename: "[name].[hash:8].js",
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/g, // 解析css
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/g, // 解析css
        use: ["style-loader", "css-loader","less-loader"],
      },
    ],
  },
  plugins:[
      // 插入到指定的位置
    new htmlWebpackPlugin({
        template:"./public/index.html",
        filename:"index.html"
    })
  ],
//   watch: true, // 开启监视 方案二
  devServer: {
    open: true,
    port: 8080,
    compress: true,
    hot: true,
  },
};
