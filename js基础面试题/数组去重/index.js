var array = [1, 1, '1', '1', 3 ,4, 3]

function unique(array) {
  var res = []

  for( let i=0; i< array.length; i++){
    // for(var j=0; j<res.length; j++){
    //   if(array[i] === res[j]) {
    //     break;
    //   }// 如果没有出现过
    // }
    // if(j === res.length) {
    //   res.push(array[i])
    // }

    // 数组下标
    var current = array[i]
    if(res.indexOf(current) === -1){
      res.push(current)
    }
    
  }
  console.log(res)
  return res
 
}
unique(array)