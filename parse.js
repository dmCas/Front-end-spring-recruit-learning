var object = {
  b: { c: 4},
  d: [{e: 5}, {e: 6}]
}
console.log(object[b])
var parse = function(obj, path) {
  // b.c split 切割为 b c
  // d[0].e d.0.e
  let res = 'undefined';
  path = path.replace('[', '.').replace(']', '.') 
  path.split('.').forEach(key => {
    console.log(obj[key])
    obj = obj[key]
  });
  return obj || res
}
parse(object, 'b.c')
// console.log( parse(object, 'b.c') == 4) //true
