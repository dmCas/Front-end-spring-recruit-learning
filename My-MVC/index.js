// const koa = require('koa')
// const app = new koa()

const app = new(require('koa'))()
const { initRouter } = require('./lm-loader')

app.use(initRouter().routes())
app.listen(3000)