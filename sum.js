const array = [1, 2, 6, 6, 7, 8]
const data = 12
function Sum(array, n){
  let len = array.length
  for(let i= 0; i<len; i++)
  {
    let j = i + 1
    while(j < len){
      if(array[j] == n-array[i]){
        return [i, j]
      }
      j++
    }
  }
  return false
}
console.log(Sum(array, data))