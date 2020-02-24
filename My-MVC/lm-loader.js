const fs = require('fs')
const path = require('path')
const Router = require('koa-router')


// 读取目录和文件
function load (dir ,cb) {
  // 获取绝对路径
  const url = path.resolve(__dirname, dir)
  // 读取目录
  const files = fs.readdirSync(url)
  // 遍历
  files.forEach(filename => {
    // 去除扩展名
    filename = filename.replace('.js', '')
    const file = require(url + '/' + filename)
    //filename -> 目录 file -> 文件
    cb(filename, file)
  })
}


//加载路由
// app.get('/', ctx => {
// })

function initRouter () {
  const router = new Router()
  load('routes', (filename, routes) => {
    const prefix = filename === 'index' ? '' : `/${filename}`
    Object.keys(routes).forEach(key => {
      const [method, path] = key.split(' ') // [get, /]
      console.log(`正在映射地址: ${method.toLocaleUpperCase()} ${prefix}${path}`)

      // 注册路由
      // app.get('/', ctx => {})
      //router[method]() === router.get()
      router[method](prefix + path, routes[key])
    })
  })
  return router
}
// initRouter()


//模块抛出 index.js模块引入
module.exports = {
  initRouter
}
// load('routes', filename => console.log('routes:' + filename))