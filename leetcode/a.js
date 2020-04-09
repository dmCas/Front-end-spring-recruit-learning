var i = 0
var count = 0
var nNumber = 11
var replyBug = function(n, k) {
  var index = 1;
  n = n - i
  while(Math.floor((i/(k**index))) >= 1){
    n -=  Math.floor((i/(k**index)))
    index = index + 1
  }
  if(n == 0) {
    console.log(i)
    return count
  }
  if(n > 0) {
    i = i + 1
    // console.log(i)
    replyBug(nNumber,k)
  }
}

replyBug(nNumber,3)


// var findDay = function(d, t, n) {
//   var pre_minute = n % 60 // 40
//   var pre_hour = Math.floor(n / 60) //  1
//   var furTime = t.split(':')
//   var cur_hour = parseInt(furTime[0]) // 2
//   var cur_minute = parseInt(furTime[1]) // 10
//   var new_minute = 0, new_hour = 0
//   var new_time = 0
//   if(cur_hour - pre_hour < 0) {
//     if(d == 1) {
//       d = 7
//     }
//     else{
//       d -= 1
//     }
//     new_hour = cur_hour - pre_hour + 24
//     if(cur_minute - pre_minute < 0){
//       new_minute = 60 + (cur_minute - pre_minute)
//       new_hour -= 1
//     }else{
//       new_minute = (cur_minute - pre_minute)
//     }
//   }
//   else{
//     new_hour = cur_hour - pre_hour
//     if(cur_minute - pre_minute < 0){
//       new_minute = 60 + (cur_minute - pre_minute)
//       new_hour -= 1
//     }else{
//       new_minute = (cur_minute - pre_minute)
//     }
//   }
//   if(new_hour<10){
//     new_hour = '0' + new_hour
//   }
//   if(new_minute<10){
//     new_minute = '0' + new_minute
//   }
//   new_time = new_hour+':'+new_minute
//   return [d,new_time ]
// }
// // console.log(findDay(3,'02:10',100))


// arrA = [5, 3, 1, 4, 2 ]
// arrB = [2, 4, 5, 1, 3 ]

// var findPerson = function (n, arrayA, arrayB) {
//   var goon = arrayA.indexOf(Math.max.apply(null,arrayA)) // 1
//   var slowest = arrayB.indexOf(Math.max.apply(null,arrayB))  // 5
//   var chufa = arrayA[slowest]
//   console.log(chufa)
// }
// // console.log(Math.max.apply(null, arrA))
// findPerson(5, arrA, arrB)