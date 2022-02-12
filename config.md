### webpack5.68.0 配置

<!-- 定制自己项目的webpack  -->

> 整体配置预览

```
const path = require("path");

module.export = {
    mode:"development" | "production"
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"[name].[hash].js"
    },
    module:{
      rules:[
        {
          test:/\.css$/g,
          use:["style-loader","css-loader"]
        }
      ]
    },
    plugins:[
      new HtmlWebpackPlugin({
        template:"./public/index.html",
        filename:"index.html"
      })
    ],
    target:"web",
    resolve:{
      modules:[
        "node_modules",
        path.resolve(__dirname,"app")
      ],
      extensions:["js","jsx","ts","tsx","css","less","scss"]
    },
    devServer{
      port:8080,
      hot:true,
      proxy: { // 代理
      '/api': 'http://localhost:3000'
      },
      compress: true, // 压缩
      https:false,
    },
    plugins:[
      new HtmlWebpackPlugin({
        template:"./public/index.html",
        filename:"index.html"

      })
    ]
}

```

### 使用不同语言的配置

- TypeScript

> 所需依赖
> npm install --save-dev typescript ts-node @types/node @types/webpack
> 注意，你还需要核对 tsconfig.json 文件。如果 tsconfig.json 中的 compilerOptions 中的 module 字段是 commonjs ，则配置是正确的，否则 webpack 将因为错误而构建失败。发生这种情况，是因为 ts-node 不支持 commonjs 以外的任何模块语法。

##### 解决方案

1. 修改 tsconfig.json
2. 安装 tsconfig-paths

> 新建文件 tsconfig-for-webpack-config.json

  ```
  {
    "compilerOptions": {
      "module": "commonjs",
      "target": "es5"
    }
  }

  然后 package.json
  {
    "scripts": {
      "build": "TS_NODE_PROJECT=\"tsconfig-for-webpack-config.json\" webpack"
    }
  }
  ```

- Babel and jsx 结合库使用 类如react TODO
>1. 安装依赖 npm install --save-dev babel-register jsxobj babel-preset-es2015

>2. 新建文件 .babelrc

  ```
  {
    "presets": [ "es2015" ]
  }
  ```

### 导出函数
  ```
  module.exports = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        entry: './app.js',
        在这里写配置文件即可
      })
    }, 5000)
  })
}
  ```