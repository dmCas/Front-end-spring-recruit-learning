
function currying(fn) {
  var allArgs = []
  return function next() {
    var args = [].slice.call(arguments)
    if(arguments.length > 0) {
      allArgs = allArgs.concat(args)
      return next
    }
    else{
      return fn.apply(this, allArgs)
    }

  }
}


var add = currying(function() {
  var sum = 0;
  for(var i = 0; i<arguments.length;i++){
    sum+=arguments[i]
  }
  console.log(sum)
  return sum
})

add(1)(2,3)(3,4)()