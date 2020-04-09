// 全部引入 打包体积变大 需要在配置文件进行按需加载 就不需要引入整个polyfill
// import "@babel/polyfill"

let obj = {}
const str = ""
const arr = [new Promise(() => {}), new Promise(() => {})]
arr.map(item => {
  console.log(item)
})
// import './index.css'

// import a from './a'
// import b from './b'

// a()
// b()

// if (module.hot) {
//   module.hot.accept('./a', () => {
//     console.log('有更新了')
//     document.body.removeChild(document.getElementById('number'))
//     a()
//   })
// }

// HMR 默认对CSS模块支持较好， 对JS模块需要额外的处理 通过module.hot.accept
// 对需要更新的模块进行监控


// var btn = document.createElement("button");
// btn.innerHTML = "新增"
// document.body.appendChild(btn)

// btn.onclick = function() {
//   var div = document.createElement("div")
//   div.innerHTML = "item"
//   document.body.appendChild(div)
// }