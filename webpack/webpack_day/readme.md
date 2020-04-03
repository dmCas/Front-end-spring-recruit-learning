# plugin 
> 项目构建的流程过程当中的某一个特定的时间点，不同的插件执行的时间点不一样，插件相当于是我们webpack的一个生命周期.
他执行的作用就是在webpack执行构建的过程当中的某一个特定的时间点来注入我们的扩展逻辑，达到修改构建结果的目的

# webpack热加载

热模块 HMD

>HMR 默认对CSS模块支持较好， 对JS模块需要额外的处理 通过module.hot.accept 对需要更新的模块进行监控

# MiniCssExtractPlugin.loader 单独打包出来