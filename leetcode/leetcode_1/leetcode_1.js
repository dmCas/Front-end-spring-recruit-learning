var arr = [13, 1 ,2, 5, 3, 8, 11]
var sum = 18
// var a = arr.splice(1,2,5,6)
// console.log(a)
var twoSum = function(arr, sum) {
  // 暴力破解法 O(n^2)
  // var x = 0
  // for( let i=0; i < arr.length; i++) {
  //   for(let j=0; j < arr.length; j++) {
  //     if (i !== j && arr[i] + arr[j] == sum){
  //       console.log(i, j, arr[i], arr[j])
  //       return [i, j]
  //     }
  //     x++
  //   }
  // }
  // return false

  let obj = {}
  // {5: 0} {17: 1} ... {13: 3}
  // {13: 5} {1: 17} ... {5: 13}
  arr.forEach((v, i) => {
    if(String(v) in obj) {
      console.log(obj[v], i)
    }
    obj[sum - v] = i
    console.log(obj)
    // obj[v] = sum -v
  });

  // for(var i = 0; i<arr.length; i++) {
  //   let j = i + 1
  //   while(j < arr.length) {
  //     if(arr[i] == sum - arr[j]){
  //       return [i , j]
  //     }
  //     j++
  //   }
  // }
  // return false
}
// console.log(twoSum(arr, sum))