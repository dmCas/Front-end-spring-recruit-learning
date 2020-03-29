// var a = []
// var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

// for(let i = 0; arr< 4; i++){
  
// }

//输出1-9
// for (var i = 0; i< 10; i++){
// 	setTimeout(((i) => {
// 		console.log(i);
//   })(i), 1000)
// }
for (var i = 0; i < 10; i++) {
  setTimeout((i) => {
      console.log(i);
  }, 1000, i)
}