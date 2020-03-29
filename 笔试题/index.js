var arr = [12, 3, 6]
function doData(arr){
  var n = arr.length;
  var count = 0;
  // 排序
  var newArray = arr.sort((a,b) => {return b - a})
  for(var i=0; i<arr.length;i++){
    while(newArray[i] >= n){
      newArray[i] = newArray[i] - n
      count++
    }
  }
  return count
}

doData(arr)