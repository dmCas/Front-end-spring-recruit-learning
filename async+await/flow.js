// // 1. 回调
// fs.readFile('./', (content) => {
//   setTimeout(() => {
//     content += '123';
//     fs.append('./', content, (err) => {

//     })
//   }, 3000)
// })

// 2. Promise
let p = new Promise((resolve, reject) => {
  resolve('123')
}).then((res) => {
  console.log(res)
}).then(() => {

})

// Co 作者 TJ
// es6 => generator
co(
  function * test() {
    let c = yield fs.readFile();
    c += '123'
    let res = yield fs.append('./', c)
  }
)

// 3. async
async () => {
  let c = await fs.readFile()
  c += '123'
  let res = await fs.append('./', c)
}