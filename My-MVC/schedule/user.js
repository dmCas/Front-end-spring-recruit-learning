module.exports = {
  interval: '*/9 * * * * *', // 3s 执行一次
  handler () {
    console.log('定时任务 30秒执行一次' + new Date())
  }
}