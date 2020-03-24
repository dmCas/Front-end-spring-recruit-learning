const net = require('net')

// 创建一个服务器 
// 1. 监听地址和端口 
// 2. 处理发送到当前监听地址以及端口的数据
// 3. 返回（发送）数据到连接的客户端
// 在node中, tcp 协议, 基于net模块来实现

const server = net.createServer(() => {
  // 这个函数其实就是connection时间绑定的函数
})

// function createServer() {
//   let s = new net.Server()
//   s.on('connection', callback)
//   return s
// }

// 有客户端连接的时候触发
server.on('connection', () => {
  console.log('我是蜗牛')
})

// 监听地址及端口
server.listen( 12345, '127.0.0.1')

