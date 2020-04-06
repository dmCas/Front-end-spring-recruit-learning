const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  if(req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', 8);
    res.write("helloworld");
  }
})

server.listen(8081, () => {
  console.log("成功启动");
})
