// 柯里化 ---- 提前接收部分参数，延迟执行，不立即输出结果，而是返回一个接受剩余参数的函数
// // sum(1,2)(3) = 6
// // sum(1,2)(3,4) = 10
// // sum(1,2)(3,4)(5) = 15

// // var sum = function(){
// //   let sum = 0
// //   for(var i = 0; i< arguments.length ; i++){
// //     sum += arguments[i]
// //   }
  
// //   var args = [].slice.call(arguments)

// // }

// // sum(2,3)

// function currying(fn) {
//   var allArgs = []
//   return function next() {
//     var args = [].slice.call(arguments)

//     if(args.length> 0){
//       allArgs = allArgs.concat(args)
//       return next
//     }
//     else{
//       return fn.apply(null, allArgs);
//     }
//   }
// }

// var add = currying(function(){
//   var sum = 0;
//   for(var i = 0; i < arguments.length; i++){
//       sum += arguments[i];
//   }
//   return sum;
// })

// add(1)(2, 3)(4)() 

function currying(fn){
  var allArgs = [];

  function next(){
      var args = [].slice.call(arguments);
      allArgs = allArgs.concat(args);
      return next;
  }
  // 字符类型
  next.toString = function(){
      return fn.apply(null, allArgs);
  };
  // 数值类型
  next.valueOf = function(){
      return fn.apply(null, allArgs);
  }
  return next;
}
var add = currying(function(){
  var sum = 0;
  for(var i = 0; i < arguments.length; i++){
      sum += arguments[i];
  }
  return sum;
});
console.log(add(1)(2, 3)(4)(5).valueOf())