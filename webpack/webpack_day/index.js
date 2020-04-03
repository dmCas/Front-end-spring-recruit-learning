import a from './a'
import b from './b'
import pic from './img/cookie.jpeg'
import './index.css'

import axios from 'axios'
// import './index.scss'
var img = new Image()
img.src = pic
img.classList.add('pic')
var root = document.getElementById('root')
root.append(img)

// console.log(pic)

// 既然webpack默认只认识js模块，那么遇到非js模块该怎么办？
// loader 帮助我们告诉浏览器遇到除js以外的模块怎么处理
a()
b()

// webpack会去匹配webpack配置的localhost:3000
axios.get('/api/info').then((res)=>{
  console.log(res)
})

function lm() {
  console.log('welcome to webpack')
}

lm()

