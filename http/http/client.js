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
  host: 'www.baidu.com',
  port: 80,
  // http
  protocol: 'http:',
  method: 'GET',
  path: '/img/bd_logo1.png?where=super'
}, (res) => {
  // 这个函数会在服务器相应的时候触发 
  // res => socket
  // console.log(`状态码: ${res.statusCode}`);
  // console.log(`响应头: ${JSON.stringify(res.headers)}`);

  // let content = ''

  // Buffer流拼接
  let content = Buffer.alloc(0)

  res.on('data',(data) => {
    // console.log(data.toString())
    // 图片二进制
    // content += data.toString()
    content = Buffer.concat([content, data], content.length + data.length)
  })

  res.on('end', () => {
    fs.writeFileSync('./baidu.png', content)
  })

})

// 请求发送需要调用下面的方法

// 将数据写入请求主体。
client.write('')
client.end();