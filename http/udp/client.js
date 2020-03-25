const dgram = require('dgram')

const clientSocket = dgram.createSocket('udp4')
// 发送数据-- 无连接协议 不需要连接服务器， 然后再发数据

clientSocket.send('1111',3000, '127.0.0.1', (err) => {
  clientSocket.close();
});