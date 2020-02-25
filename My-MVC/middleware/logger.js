module.exports = async (ctx, next) => {
  console.log(ctx.method + " " + ctx.path)
  const start = new Date()
  console.log('这是中间件内容')
  await next()
  const duration = new Date() - start
  console.log(
    ctx.method + " " + ctx.path + " " + ctx.status + " " + duration + "ms"
  )
}