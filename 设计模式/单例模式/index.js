// 独立对象， 创建2个 一个是xiaowang 一个是xiaoli
// 让 xiaoli 跟 xiaowang 通过门铃进行通信
// 先看 xiaowang 家有没有门， 如果有门， 直接敲门didi, 如果没，先建门
// 两个单例 开始通信

// var test = {
//   name: 'wn',
//   fn = function() {

//   }
// }

var xiaowang = (function(argument){
  var xiaowangjia = function (message){
    this.menling = message
  }
  var men;
  var info = {
    sendMessage: function(message) {
      if (!men) {
        men = new xiaowangjia(message)
      }
      return men
    }
  }
  return info
})()

var xiaoli = { // 静态的, 常驻到内存里
  callxiaowang: function(msg) {
    var _xw = xiaowang.sendMessage(msg)
    // alert(_xw)
    console.log(_xw)
    _xw = null // 被垃圾回收
  }
}

xiaoli.callxiaowang('didi')