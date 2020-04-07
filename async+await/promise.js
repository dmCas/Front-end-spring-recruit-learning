// 立即 resolve 的 promise
// Promise.reject
let p = Promise.resolve(1)
let p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(666)
  }, 2000)
})
(async function() {
  // await 后面接 promise??
  // 接 promise 才能保证顺序
  let c = await p;
  let d = await p2;
  let f = await 789;
  console.log(c)
})()

// 异步 变 同步 ??? 只是写法
// 怎么 保证 p resolve 后面代码才会执行
// 都用 Promise.resolve 包装一层 不用判断 await yield 后面到底是 promise(有 then方法) 还是非promise(没有then方法)
Promise.resolve(p).then(() => {
  Promise.resolve(p2).then(() => {
    Promise.resolve(789).then(() => {
      console.log(c)
    })
  })
})

// 下一个 yield 代码 (g.next()) 怎么移到 then 回调里面

// Promise.then(() => {
//   g.next()
// })