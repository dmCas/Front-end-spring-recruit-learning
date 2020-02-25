// const koa = require('koa')
// const app = new koa()

const Koa = require('koa')
const { initRouter, initController,initService, loadConfig, initSchedule } = require('./lm-loader')

// app.use(initRouter().routes())
// app.listen(3000)

class lm {
  constructor (conf) {
    this.$app = new Koa(conf)
    //加载配置项
    loadConfig(this)
    this.$service = initService()
    this.$ctrl = initController()
    this.$router = initRouter(this)
    this.$app.use(this.$router.routes())


    initSchedule()
  }

  start (port){
    this.$app.listen(port, () => {
      console.log('服务已启动成功 端口：' + port)
    })
  }
}

module.exports = lm