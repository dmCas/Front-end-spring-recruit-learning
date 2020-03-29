var arr = [1, 2, 1, 1, '1']

function unique(arr) {
  // set接受一个数组 返回一个不重复的数据结构
  // return [...new Set(arr)]
  const seen = new Map();
  return arr.filter((a) => !seen.has(a)
  && seen.set(a, 1));

}

