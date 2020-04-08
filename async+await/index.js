let p = new Promise((resolve) => {
  setTimeout(() => {
    resolve(123)
  }, 5000)
})
let p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(234)
  }, 2000)
})
function* test() {
  let a = yield p;
  console.log(a)
  let b = yield p2;
  console.log(b);
}

// 1. 执行 generate 2. 保证顺序
function asyncTogenerate(gen) {
  let g = gen()
  function step(value) {
    // 处理 yield 返回值问题
    let info = g.next(value);
    if(info.done){
      return 
    }
    else{
      Promise.resolve(info.value).then((res) => {
        // 下一个 yield 递归
        // 第一次拿到p resolve -> 1
        step(res)
      })
    }
  }
  // 启动递归
  step()
}
asyncTogenerate(test)