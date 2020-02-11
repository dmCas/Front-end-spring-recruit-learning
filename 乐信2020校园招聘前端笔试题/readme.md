- 参考答案地址：https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control

- 以下正则进行对字符串"welcome**to**fenqile**"执行test操作后输出为true的正则表达式是：

答案：/welcome\*{2,4}to\*{2,4}fenqile\*{0,1}/
/welcome\*{2,4}to\*{2,4}fenqile$/
错误原因：$ -> 以结尾 题中：以fenqile结尾

- 只有栈能实现递归
  树形结构只能描述一对多的相互关系，无法描述多对多的相互关系，多对多的相互关系要使用图形结构进行描述；
  (广度优先遍历：队列实现)
  (深度优先遍历：利用栈实现)

- 将当前页面的请求转发到指定的IP：(负载均衡， 后端)

- display:none 浏览器不会去发起请求加载
  例外 backgroud-image 对span不生效 只对块级元素生效

- pwa:（满足下列三个条件）
  service-work: 缓存 断网也能访问这个页面
  应用添加到桌面
  通知

- 内联JS： 也有应用场景， 移动端rem适配 html: font-size：内联
  防止CSRF: token 我们可以采用token机制进行页面来源是否合法的判定，这个token不能采用非对称加密形式生成；
  图片验证码: 认为操作 防止非人为操作
