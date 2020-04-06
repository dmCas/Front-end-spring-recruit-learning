

function currying(fn){
  var allargs = []
  function next(){
    var args = [].slice.call(arguments)
    allargs = allargs.concat(args)
    console.log(allargs)
    return next
  }
  next.toString = function(){
    fn.apply(this, allargs)
  }

  return next
}


var add = currying(function() {
  var sum = 0 
  for(var i = 0; i< arguments.length-1;i++){
    sum += arguments[i]
  }
  console.log(sum)
  return sum
})
add(1)(2,3)(3,4).toString()