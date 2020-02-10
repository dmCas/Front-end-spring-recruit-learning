## 前端春招面试题
打好基础 备战名企

一、CSS伪类选择器
伪元素：创建一些不在DOM树中的元素，并为其添加样式。
::first-letter ::first-line, ::before, ::after

伪类：用于元素处于的某个状态时，为其添加对应的样式，这个状态是根据用户行为而动态变化的(:hover),和普通的css类相似，可以为已有的元素添加样式

二、位运算

1 -> 1 00000000 00000000 00000000 00000001
-1 -> -1 (反码需要+1) 1111 1111 1111 1111 1111 1111 1111 1111 1111

-1 >>> 34  34 % 32 = 2  向右移2位
右移 32位 之后 32 % 32 = 0 相当于未移动

题：[1<2<3 , 3<2<1]
从左到右运算 1<2 true(运算时隐式转换为1)
true < 3 === 1< 3 
同理false转换为-1

三、['1', '2', '3'].map(parseInt)()
Array.map((a每一项, b当前项索引, c数组) => {
  parseInt(a, b) // b代表进制 进制是2-32
})
parseInt(1,0) -> 1
parseInt(2,1) ->不存在1进制 NaN
parseInt(3,2) ->3超过2进制的范围 NaN

四、
例题: console.log(1);
      setTimeout(() => {console.log(2)},0);
      console.log(3);
      Promise.resolve(4).then(b => {
        console.log(b)
      })
      console.log(5)
task: 宏任务: 包括整体代码script，setTimeout，setInterval, 同步代码 [setTimeout]
microTask: 微任务: Promise.then [Promise.resolve(4).then] -> []
event-loop: 整体宏任务（同步代码） -> 所有的微任务 ->宏任务 -> 所有的微任务

答案：13542

五、