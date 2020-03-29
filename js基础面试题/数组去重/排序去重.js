function unique(arr) {
  var res = [];
  var sortedArray = arr.sort((a,b) => a-b);
  var seen;
  for (var i = 0; i < sortedArray.length; i++){
    if(!i || seen !== sortedArray[i]){
      res.push(sortedArray[i])
    }
    seen = sortedArray[i]
  }
  return res
}

var arr = [3, 4,5 ,1, 4,34,2]
unique(arr)
console.log(unique(arr))