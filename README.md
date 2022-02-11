# webpack4 学习

### 第一步 安装
> 全局安装
1. npm i webpack webpack-cli -g
    直接 webpack 可以使用 npx webpack   输出的是 dist 目录 下面的main.js
    缺陷 入口只能是src/index.js
2. npm i webpack webpack-cli -D 推荐在项目中安装 自定义安装
    项目中的需要指定入口和模式
    webpack --config ./src/index.js --mode=development

