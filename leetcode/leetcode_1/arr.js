arr = [3, 44, 13, 1, 8, 9, 7, 2]

// 排序
// arr.sort((a,b) => a-b)
// 抛开语言, 原始能力只有按照索引找元素, 交换元素位置, 对比大小

// 冒泡排序 个子高到个子矮依次排序
// var swap = function(a, b) {
//   var temp;
//   temp = a
//   a = b 
//   b = temp
// }

// var bubbleSort = function(arr) {
//   var len = arr.length;
//   for(var j = 0; j < len-1; j++){
//     for(var i = 0; i< len-1-j; i++) { // O(n^2/2)
//       if(arr[i] > arr[i+1]){
//         let temp = arr [i]
//         arr[i] = arr[i+1]
//         arr[i+1] = temp
//       }
//     }
//   }
//   console.log(arr)
// }
// bubbleSort(arr)

// 快排 O(nlog(n))
// 排队的时候, 随便找个人(基准), 遍历一次, 比他小的在左边,大的在右边
// let arr1 = [3, 44, 13, 1, 8, 9, 7, 2]
// function quickSort(arr) {
//   if(arr.length <= 1) {
//     // 队列只有一个人或者空 是没有必要排序的
//     return arr
//   }
//   let flag = arr[0]
//   let left = []
//   let right = []
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > flag) {
//       right.push(arr[i])
//     }else{
//       left.push(arr[i])
//     }
//   }
//   // console.log([...left, flag, ...right], left.concat([flag]).concat(right))
//   return quickSort(left).concat([flag]).concat(quickSort(right))
// }
// console.log(quickSort(arr))

let arr2 = [3, 44, 13, 1, 8, 9, 7, 2]
// 3 
// [3, 2, 13, 1, 8, 9, 7, 44]

function quickSort2(arr) {
  // 原地快排
  if (arr.length<=1) {
    return arr
  }
  let flag = arr[0]
  let i = 1
  let j = [arr.length -1]
  while(i < j){
    while(arr[j] >= flag && i < j) {
      j--
    }
    while(arr[i] <= flag && i < j) {
      i++
    }
    // 右边找到一个比flag小的,左边找到比他大的 交换位置
    let temp = arr [i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  // flag交换到正确的位置上
  let temp = arr [0]
  arr[0] = arr[j]
  arr[j] = temp
  return quickSort2(arr.slice(0, i)).concat([flag]).concat(quickSort2(arr.slice(j+1)))
}
console.log(quickSort2(arr2))