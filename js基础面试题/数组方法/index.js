// Arrary.from() 将对象转为数组 
// 第一个参数：两类对象 
// 第二个参数：对每个元素进行处理的方法 并将处理后的值放入返回的数组
{
  var obj = {
    0: 0,
    1: 1,
    length:2
  }
  var str = 'hello'
  let c = Array.from(str)
  let b = Array.from(obj, (item) => item+1)
  console.log(b) // [1, 2]
  console.log(c) // ['h', 'e', 'l', 'l', 'o']
}

// splice() 向/从数组中添加/删除项目 并返回被删除的项目
// array.splice(index, howmany, item1, item2)
// index: 必需 添加/删除项目的位置 为负则从末尾开始
// howmany 可选 要删除的数量 
// item... 可选 添加的新项目
{
  let a = [1, 2, 3, 4, 5, 6]
  // a.splice(1, 2, 8, 9) // 返回 2 3
  // console.log(a) // 1 8 9 4 5 6
  // 注意 添加是在开始的元素前面添加的
  a.splice(-1, 0 , 8, 9) // []
  console.log(a)
}

// sort() 数组排序 返回排序后的数组
// 参数可选 默认按字母升序 若是数字数组则先转化为Unicode为位点，再比较字符
    // 字符串排列 看起来很正常
{ 
  var a = ["Banana", "Orange", "Apple", "Mango"];
  a.sort(); // ["Apple","Banana","Mango","Orange"]
  // 数字排序的时候 因为转换成Unicode字符串之后，有些数字会比较大会排在后面 这显然不是我们想要的
  var	a = [10, 1, 3, 20,25,8];
  console.log(a.sort()) // [1,10,20,25,3,8];
}

// pop() 删除一个数组中的最后一个元素 并返回这个元素
{
  let a = [1, 2, 3]
  console.log(a.pop()) // 3
  console.log(a) // 1 2
}

// shift() 删除一个数组中的第一个元素 并返回这个元素
{
  let a = [1, 2, 3]
  console.log(a.shift()) // 1
  console.log(a) // 2 3
}

// push() 向数组末尾添加一个或多个元素 并返回新数组的长度
{
  // 注意是 返回的新的数组的长度
}

// unshift() 向数组开头添加一个或多个元素 并返回数组的长度
{
  var a = [1, 2]
  a.unshift('开头1', '开头2')
  console.log(a)
}

// reverse() 返回颠倒后的数组
{
  let  a =  [1,2,3];
  a.reverse();  
  console.log(a); // [3,2,1]
}

// 深浅拷贝
// 浅拷贝定义：如果数组元素是基本类型，就会拷贝一份，互不影响
// 如果是对象或者数组，就会只拷贝对象和数组的引用，这样我们无论在新旧数组进行了修改，两者都会发生变化

// slice() 浅拷贝 返回一个从开始到结束(不包括)选择的数组的一部分拷贝到一个新数组对象,原数组不会被修改
{
  // 基本数组类型 原数组不会改变
  let a = ['hello' , 'world']
  let b = a.slice(0,1) // 'hello'
  console.log(a) // ['hello' , 'world']
  a[0] = '改变原数组' // ['改变原数组' , 'world']
  console.log(a, b)

  // 复杂数据类型(对象、数组) 原数组会改变 拷贝的知识指向原数组的指针
  let c = [{name:'bc'}]
  let d = c.slice()
  d[0].name = 'jj'
  console.log(c, d) // [{name:'jj'}] [{name:'jj'}]
}

// join() 把数组中的所有元素通过指定的分隔符进行分割并翻入一个字符串，返回生成的字符串
{
  // 算法题 将 s = 'hello world !' 每个空格替换成%20
  var s = 'hello world !'
  var arr = s.split(' ')
  var s = arr.join('%20')
  console.log(s)
}

// toLocaleString() 数组转字符串返回一个表示数组元素的字符串
{
  let a=[{name:'OBKoro1'},23,'abcd',new Date()];
  let str=a.toLocaleString(); // [object Object],23,abcd,2018/5/28 下午1:52:20 
  console.log(str)
  //调用数组的toLocaleString方法，数组中的每个元素都会调用自身的toLocaleString方法，对象调用对象的toLocaleString,Date调用Date的toLocaleString
}

// toString() 把数组转换为由逗号连起来的字符串
{
  // 值得注意的是：当数组和字符串操作的时候，js 会调用这个方法将数组自动转换成字符串
}

// concat() // 方法用于合并两个或多个数组 返回一个新数组
{
  // ES5 浅拷贝
  var a = [1, 2, 3]
  var b = a.concat('hello', 'world')
  console.log(a, b) // [1, 2, 3], [1, 2, 3, 'hello', 'world']
  // ES6 ... 合并数组
  var c = [6, ...a, 6]
  console.log(c) // [6, 1, 2, 3, 6]
}

// indexOf
// 参数1： 被查找的元素
// 参数2： 开始查找的位置
{
  // 不能识别NaN
  var a = ['1', 2, NaN]
  a.indexOf(NaN) // -1
}

// lastIndexOf(searchElement,fromIndex) 查找指定元素在数组中的最后一个位置
// searchElement(必须): 被查找的元素
// fromIndex(可选): 逆向查找开始位置，默认值数组的长度-1，即查找整个数组。
{
  // fromIndex 准则
  let a=['OB',4,'Koro1',1,2,'Koro1',3,4,5,'Koro1']; // 数组长度为10
  var b = a.lastIndexOf('Korol', 4) // 从下标4开始往前找 返回下标2
  var b = a.lastIndexOf('Korol', 100) // 大于或等于数组长度 则从前往后查找
  var b = a.lastIndexOf('Korol', -11) // 负值绝对值大于数组长度则不会查找返回-1
  var b = a.lastIndexOf('Korol', -9) // 从第2个元素4往前查找
}


// ES7 includes() 查找数组是否包含某个元素 返回boolean
// array.includes(searchElement,fromIndex=0)
{
  // 可以是否NaN
}

  
{
  let a = [1, 2, 3]; // 最后第二个元素是空的，不会遍历(undefined、null会遍历)
  let obj = { name: 'OBKoro1' };
  let result = a.forEach(function (value, index, array) { 
    a[3] = '改变元素';
    a.push('添加到尾端，不会被遍历')
    console.log(value, 'forEach传递的第一个参数'); // 分别打印 1 ,2 ,改变元素
    console.log(this.name); // OBKoro1 打印三次 this绑定在obj对象上
    // break; // break会报错
    return value; // return只能结束本次回调 会执行下次回调
    console.log('不会执行，因为return 会执行下一次循环回调')
  }, obj);
  console.log(result); // 即使return了一个值,也还是返回undefined
}