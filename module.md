#### webpack 5.68.0 module 常用配置

> 例子

```
module.export = {
    module:{
        noParse:/jquery|lodash/ // 忽略库
    }
}
```

1. rules 数组 每一个是一个 rule

```
module.export = {
    rules:[
        {
          test:/\.css$/g,
          oneOf:[ // 只使用第一个规则
            {
              resourceQuery: /inline/, // foo.css?inline
              use: 'url-loader'
            },
            {
              resourceQuery: /external/, // foo.css?external
              use: 'file-loader'
            }
          ],
          use:["css-loader"] // 使用loader
          parser: {
            amd: false, // 禁用 AMD
            commonjs: false, // 禁用 CommonJS
            system: false, // 禁用 SystemJS
            harmony: false, // 禁用 ES2015 Harmony import/export
            requireInclude: false, // 禁用 require.include
            requireEnsure: false, // 禁用 require.ensure
            requireContext: false, // 禁用 require.context
            browserify: false, // 禁用特殊处理的 browserify bundle
            requireJs: false, // 禁用 requirejs.*
            node: false, // 禁用 __dirname, __filename, module, require.extensions, require.main 等。
            node: {...} // 在模块级别(module level)上重新配置 node 层(layer)
          }
        }
    ]
}
```
