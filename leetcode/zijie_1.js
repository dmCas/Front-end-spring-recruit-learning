var arr1 = [1, 1, 1, 1, 1]
var arr2 = [1, 2,1,3,1]
var changeTo = function(arr1, arr2) {
  var len = arr1.length
  var temp = 0
  for(var i=0; i<len; i++){
    if(temp == 0 && arr1[i] !== arr2[i]){
      temp = arr2[i] - arr1[i]
    }
    if(temp != 0 && arr1[i] !== arr2[i]){
      if(temp != arr2[i] - arr1[i]){
        console.log('No')
        return;
      }
    }
  }
  console.log('YES')
  return
} 

changeTo(arr1, arr2)