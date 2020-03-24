const net = require('net')

// 创建客户端与udp不同
// 1. new net.Scoket()
// 2. net.createConnection()

// 要连接的目标主机的地址与端口号
const clientSocket = net.createConnection(1234, '192.168.0.100')

// 监听数据传输
clientSocket.on('data', data => {
  console.log('服务器返回:' + data)

  // clientSocket.write('get money')
  clientSocket.write('getBaby')
})

// 当数据接收完成的时候触发
clientSocket.on('end',() => {
  console.log("数据包接收完毕")
})