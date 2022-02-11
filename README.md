# webpack4 学习

### 第一步 安装
> 全局安装
1. npm i webpack webpack-cli -g
    直接 webpack 可以使用 npx webpack   输出的是 dist 目录 下面的main.js
    缺陷 入口只能是src/index.js
2. npm i webpack webpack-cli -D 推荐在项目中安装 自定义安装
    项目中的需要指定入口和模式

### webpack 到底在干什么？
1. webpack 主要在浏览器使用 不能直接使用node
2. 多文件打包成单个
3. 静态资源打包器


### webpack 配置 commonJS规范

1. 入口 entry
2. 出口 outputh
3. 插件 plugins
4. loader 处理转换

### 自动监视变化编译
1. script 中添加 webpack -watch 当文件改变 就会重新打包
2. 在 webpack.config.js 中配置watch:true 和一是一样的额
3. 推荐webpack-dev-server