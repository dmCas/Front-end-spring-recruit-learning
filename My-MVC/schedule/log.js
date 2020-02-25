module.exports = {
  interval: '*/3 * * * * *', // 3s 执行一次
  handler () {
    console.log('定时任务 3秒执行一次' + new Date())
  }
}