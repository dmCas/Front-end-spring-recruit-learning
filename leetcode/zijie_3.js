// var arr1 = [50, 100, 200]
// var arr2 = [99, 199, 200, 300]
// var arr3 = '50 100 200'
// arr3 = arr3.split(' ')
// console.log(arr3)
// var totalPrice = function(arr1, arr2){
//   var len = arr2.length;
//   var sum = 0;
//   for(var i=0; i< len; i++){
//     for(var j = 0; j < arr1.length; j++){
//       if(arr2[i] < arr1[j] && j == 0){
//         sum += arr2[i]
//         break
//       }
//       else if(arr2[i] < arr1[j]){
//         sum += arr2[i] - arr1[j-1]
  
//         break
//       }
//       else if(arr2[i] >= arr1[arr1.length-1]){
//         sum += arr2[i] - arr1[arr1.length-1]
//         break
//       } 
//     }
//   }
//   console.log(sum)
// }
// totalPrice(arr1, arr2)

var arr1 = '50 100 200'
var arr2 = '99 199 200 300'
arr1 = arr1.split(' ')
arr2 = arr2.split(' ')
console.log(arr1)
var totalPrice = function(arr1, arr2){
  var len = arr2.length;
  var sum = 0;
  for(var i=0; i< len; i++){
    for(var j = 0; j < arr1.length; j++){
      if(parseInt(arr2[i]) < parseInt(arr1[j]) && j == 0){
        sum += parseInt(arr2[i])
        break
      }
      else if(parseInt(arr2[i]) < parseInt(arr1[j])){
        sum += parseInt(arr2[i]) - parseInt(arr1[j-1])
  
        break
      }
      else if(parseInt(arr2[i]) >= parseInt(arr1[arr1.length-1])){
        sum += parseInt(arr2[i]) - parseInt(arr1[arr1.length-1])
        break
      } 
    }
  }
  console.log(sum)
  return sum
}
totalPrice(arr1, arr2)