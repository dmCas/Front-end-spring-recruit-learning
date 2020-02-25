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

function initRouter (app) {
  const router = new Router()
  load('routes', (filename, routes) => {
    routes = typeof routes === 'function' ? routes(app) : routes
    const prefix = filename === 'index' ? '' : `/${filename}`
    Object.keys(routes).forEach(key => {
      const [method, path] = key.split(' ') // [get, /]
      console.log(`正在映射地址: ${method.toLocaleUpperCase()} ${prefix}${path}`)

      // 注册路由
      // app.get('/', ctx => {})
      //router[method]() === router.get()
      // router[method](prefix + path, routes[key])
      router[method](prefix+path, async ctx => {
        app.ctx = ctx 
        await routes[key](app)
      })
    })
  })
  return router
}
// initRouter()

function initController (app) {
  const controllers = {}
  load('controller', (filename, controller) => {
    controllers[filename] = controller(app)
  } )
  return controllers
}

function initService () {
  const services = {}
  load('service', (filename, service) => {
    services[filename] = service
  } )
  return services
}

// 拿来构建后端数据库结构sequelize
const Sequelize = require('sequelize')
function loadConfig (app) {
  // 文件名和回调函数
  load('config', (filename, conf) => {
    //conf.db config文件index.js抛出的对象
    if (conf.db) {
      app.$db = new Sequelize(conf.db)
    
      // 加载模型
      app.$model = {}
      load('model', (filename, { schema, options }) => {
        //app.$db.define 来创建模板层
        app.$model[filename] = app.$db.define(filename, schema, options)
      })
      app.$db.sync() // 模块同步操作
    }

    if (conf.middleware) {
      conf.middleware.forEach(mid => {
        const midPath = path.resolve(__dirname, 'middleware', mid)
        app.$app.use(require(midPath))
      })
    }
  })
}

const schedule = require('node-schedule')
function initSchedule () {
  load('schedule', (filename, {interval, handler}) => {
    schedule.scheduleJob(interval, handler)
  })
}

//模块抛出 index.js模块引入
module.exports = {
  initRouter,
  initController,
  initService,
  loadConfig,
  initSchedule
}
// load('routes', filename => console.log('routes:' + filename))