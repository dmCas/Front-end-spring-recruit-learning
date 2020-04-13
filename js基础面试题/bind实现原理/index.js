var foo = {
  value: 1
};

function bar() {
  console.log(this.value);
}

Function.prototype.bindCall = function(context){
  var self = this
  // 获取第二个参数到最后一个参数
  var args = [].slice.call(arguments, 1)
  console.log(args)
  return function() {
    var  bindArgs = [].slice.call(arguments)
    self.apply(context, args.concat(bindArgs))
  }
}

// 返回了一个函数
// var bindFoo = bar.bind(foo); 
var bindFoo = bar.bindCall(foo, 1, 2)

bindFoo(); // 1
