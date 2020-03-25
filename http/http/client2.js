const http = require('http')
// 客户端
// http.ClientRequest 类
// new http.ClientRequest()
// http.request()
const fs = require('fs')
// 创建一个客户端 (能发http请求) 的对象
// 请求行： get http://127.0.0.1:80/ http/1.1
const client = http.request({
  // tcp
  host: '127.0.0.1',
  port: 80,
  // http
  protocol: 'http:',
  method: 'GET',
  path: '/'
}, (res) => {
  res.on('data', (data) => {
    console.log(data.toString())
  })
})

// 请求发送需要调用下面的方法

// 将数据写入请求主体。
client.write('')
client.end();