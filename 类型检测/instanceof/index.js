// 类和实例
// constructor
function instance_of (L, R) {
  var O = R.prototype // 构造函数的原型对象
  L = L.__proto__;
  while(true) {
    if( L === null) return false
    // 不停往上查找
    if( L === O){
      return true;
    }
    L = L.__proto__;
  }
  // var P = L.__proto__
  // if(O === P){
  //   return true
  // }
  // return false
}

function Animal(name) {
  this.name = name;
}

// 构造函数的原型对象
Animal.prototype = {
  canRun: function() {
    console.log('it can run');
  }
}

function Cat () {
  this.speak = '喵'
} 
// 将Aniaml的实例交给Cat 子类构造函数prototype属性作为原型对象
Cat.prototype = new Animal('miao')
// 原型对象的constrco
Cat.prototype.constructor = Cat
// 实力部分
var dog = new Animal('小黑');
// dog.canRun()
// console.log(dog instanceof Animal) // true
// console.log(Animal.prototype)

// // 任何一个对象和实例都有__proto__私有属性 指向他的原型对象
console.log(dog.__proto__)

// console.log(instance_of(dog, Animal))

const garfield = new Cat('加菲猫')

// js 对象会沿着原型链继续查找 查找 继承的一种方法
console.log(instance_of(garfield, Animal));
console.log(garfield.__proto__.__proto__ === Animal.prototype)
