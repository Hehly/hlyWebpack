# webpack5.68.0 概念

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
           filename:"[name].[hash:8].js", // 输出的文件
           publicPath:"./" 配置静态资源根路径
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
                use:[
                  {
                    loader:"style-loader"
                  },
                  { // 可对css-loader 添加参数
                    loader:"css-loader",{
                      options:{
                        modules:true
                      }
                    }
                  }
                ] // 可配置多个 从右到左 从下到上
              },
              <!-- {
                test:/\.css$/g,
                use:["style-loader","css-loader"] // 可配置多个 从右到左 从下到上
              }, -->
              {
                test:/\.js|jsx$/g,
                use:["babel-loader"] // 可配置多个 从右到左 从下到上
              },
           ]
       }
   }

   // cli 配置loader 使用！将loader分开
   webpack --module-bind babel-loader --module-bind 'css=style-loader!css-loader'
   对js 使用babel处理 对css 使用style css loader 
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
  process.env.NODE_ENV 判断当前环境
- development 开发模式 包大 有警告 利于开发
- production 生产模式 纯净版 压缩代码


### 模块解析
>enhanced-resolve 解析
1. 样式引入  引入 import "./css/index.css"  import "./css/index.less"
2. 模块引入 import styles from "./index.modules.scss" 
3. commonJs 引入 require("./utils")
> 引入不带后缀 resolve.extension =["js","jsx","ts","tsx","css","less","scss"]

### 构建目标
target:"node" | "web" web是默认的

### 热模块更替 hot
> hrm 只编译修改的内容 快速响应 而无需编译整个项目