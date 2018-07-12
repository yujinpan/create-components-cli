[TOC]

# 快速创建组件
 - 用于快速生成cloud项目的`directive`,`service`组件及其路径。
 - 生成完毕自动弹出资源管理器，方便引入。

## 依赖
 - 建议使用其他第三方shell工具，使用了`rm`，`start`命令，可能不支持。

## Start

 - 命名规范
 1. `directive`为(指令/服务)类型参数。
 2. `moduleComponentA`分为[模块]+[组件名]参数。

 > 加入`[模块]`是因为防止组件越来越多会产生命名冲突问题。

 - 实例

```
# direcitve
$ npm run ng cloud directive moduleComponentA

# service
$ npm run ng cloud service moduleMainService

# factory
$ npm run ng cloud factory moduleMainFactory

# provider
$ npm run ng cloud provider moduleMainProvider
```

> 打包生成文件在`dist/`目录下。