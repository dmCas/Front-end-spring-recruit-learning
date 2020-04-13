var arr = [1, [2, [3, 4]]]


var flattenArr = function(arr) {
  var newArr = []
  for(var i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
      newArr = newArr.concat(flattenArr(arr[i]))
    }
    else{
      newArr.push(arr[i])
    }
  }
  return newArr
}

console.log(flattenArr(arr))
