const path = require("path");

module.exports = {
  mode: "development", // 模式 development production
  entry: "./src/index.js",
  output: {
    // path: path.resolve(__dirname, "dist"), // 绝对路径 两种写法 path 指定
    path: path.join(__dirname, "dist"),
    // filename: "[name].[hash:8].js",
    filename: "main.js",
  },
  watch:true, // 开启监视 方案二
  devServer:{
      open:true,
      port:8080,
      compress:true,
      hot:true,
      contentBase:"./public"
  }
};
