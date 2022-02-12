# webpack5.68.0 文档

##### 概念: 静态资源打包器 以下是主要的核心

1. 入口 entry
   ```
   module.export={
       entry:"./src/index.js", // 单入口
       entry:{ // 多文件入口
           main:"./src/index.js",
           build:"./src/main.js"
       }
   }
   ```
2. 出口 output

   ```
   module.export={
       output:{
           path:path.resolve(__dirname,"dist"), 绝对路径
           filename:"[name].[hash:8].js" // 输出的文件
       }
   }
   ```

3. loader 使用
   ```
    module.export={
      module:{
           rules:[// 可配置多个
              {
                test:/\.css$/g,
                use:["style-loader","css-loader"] // 可配置多个 从右到左 从下到上
              }
           ]
       }
   }
   ```
4. 插件 plugin
    ```
    const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
    module.export= {
      plugins:[ // 插件是类
        new HtmlWebpackPlugin({
          template:"./public/index.html",
          filename:"index.html"
        })
      ]
    }
    ```
5. 模式 mode 两种
  > development 开发模式 包大 有警告 利于开发
  > production 生产模式 纯净版 压缩代码
