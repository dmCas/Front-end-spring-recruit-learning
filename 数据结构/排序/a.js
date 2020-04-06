console.log(1)
setTimeout(() => {
  console.log(2)
  new Promise((resolve, reject) => {
    console.log(3)
    resolve()
  }).then(() => {
    console.log(4)
  })
}, 0)
new Promise((resolve, reject) => {
  console.log(5)
  resolve()
}).then(() => {
  console.log(6)
})

setTimeout(() => {
  console.log(7)
  new Promise((resolve, reject) => {
    console.log(8)
    resolve()
  }).then(() => {
    console.log(9)
  })
}, 0)
console.log(10)