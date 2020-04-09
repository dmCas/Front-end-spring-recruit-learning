console.log('start')
setTimeout(() => {
  console.log('timer1')
  Promise.resolve().then(function() {
    console.log('promise1')
  })
}, 0)
setTimeout(() => {
  console.log('timer2')
  Promise.resolve().then(function() {
    console.log('promise2')
  })
}, 0)
Promise.resolve().then(function() {
  console.log('promise3')
})
console.log('end')


// 1. 宏任务队列 1 seeTimeout
// 微任务队列 Promise1
// 执行微任务队列 4 将setTimeout加入宏任务队列 6
// 执行宏任务1 打印 2 将Promise2 加入微任务队列
// 执行Promise2 3
// 执行宏任务 5
// 1 4 6 2 3 5



// const obj = {
//   name : 'wn',
//   say: function(){
//     console.log(this.name)
//   },
//   say1(){
//     const f = function(){
//       console.log(this.name)
//     }
//     f()
//   },
//   scedas:{
//     name: 'jj',
//     say5(){
//       console.log(this.name)
//     }
//   }
// }

// obj.say1()