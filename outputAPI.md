#### webpack 5.68.0 出口常用配置

>例子
```
module.export = {
    output:{
        auxiliaryComment:"这是注释"
    }
}
```

1. auxiliaryComment 添加注释
2. filename 输出文件名称 filename:"[name].[hash:8].js"
 参数hash 哈希 name 文件名 id 模块标识
3. hashDigest 哈希编码方式 默认 hex
4. hashDigestLength 长度 默认20
5. hashFunction 函数可以实现md5 加密
6. hashSalt 函数可以输出文件加盐
7. path:是一个绝对路径 输出到哪里
8. publicPath 静态资源根路径