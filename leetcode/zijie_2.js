var arr = [3, 5, 10, 9, 12]
var count = 0
var totalCount = function(arr) {
  var len = arr.length
  for(var i=0; i<len-1;i++){
    if(arr[i] > arr[i+1]){
      arr.splice(i, 1, arr[i]- (arr[i+1]-1),arr[i+1]-1)
      count += 1
      return totalCount(arr)
    }
  }
}
totalCount(arr)