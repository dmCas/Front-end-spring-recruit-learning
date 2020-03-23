var a = {
  name : '江军',
  job: '大三在读',
  age: '18'
}
Object.defineProperty(a, 'xiugai', {
  // writable: true, // 是否可被修改
  enumerable: true,  // 是否可以被枚举
  // configurable: true      // 这个特性决定了对象的属性是否可以被删除,以及除writable特性外的其它特性是否可以被修改;并且writable特性值只可以是false我们可以写一个代码示例来演示一下这个特性:
  get: function(){
    return this.name + ' ' + this.job 
  },

  set: function(xiugai){
    var lvli = xiugai.trim().split(' ')
    this.job = lvli[0]
    this.age = lvli[1]
  }
})

a.xiugai = '前端Webs实习生 19'
console.log(a.name + a.job + a.age)

// console.log(a.name)
// a.name = 'Beichen'

// console.log(a.name)