var reverse = function(x) {
  var n = x.toString()
  var newx = []
  if(n[0] == '-'){
    newx.push(n[0])
  }
  for(var i = n.length-1; i >=0 ; i--){
    newx.push(n[i])
  }
  if(newx[newx.length-1] == '-'){
    var a = newx.splice(-1)
  }
  if(-2147483648>newx.join('') || newx.join('')>2147483647) {
    return 0
  }
  return newx.join('')
};

reverse(-123)