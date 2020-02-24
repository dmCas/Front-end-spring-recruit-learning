module.exports = {
  'get /': async ctx => {
    ctx.body = '首页'
  },
  'get /detail': async ctx => {
    ctx.body = '用户详情详情页面'
  }
}