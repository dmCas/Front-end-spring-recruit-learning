// function curring(fn){
//   var argsAll = []
//   return function next(){
//     var arg = [].slice.call(arguments)
//     if(arg.length > 0) {
//       argsAll = argsAll.concat(arg)
//       return next
//     }
//     else{
//       return fn.apply(null, argsAll)
//     }
//   }
// }

// var add = curring(function() {
//   var sum = 0;
//   for(var i=0; i< arguments.length;i++){
//     sum += arguments[i]
//   }
//   console.log(sum)
//   return sum
// })

// add(1,2,3)(1)(123)()

// 闭包实现递增到10

var add = (function(){
  var result = 0;
  return function(){
    result++
    return result
  }
})()

console.log(add())
console.log(add())
console.log(add())
