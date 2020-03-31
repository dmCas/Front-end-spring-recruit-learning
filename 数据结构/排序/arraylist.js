function ArrayList() {
  // 属性
  this.array = []

  // 方法
  // 将数据可以插入到数组中的方法
  ArrayList.prototype.insert = function(item) {
    this.array.push(item)
  }

  // toString
  ArrayList.prototype.toString = function() {
    return this.array.join('-')
  }

  // 交换两个位置的数据
  ArrayList.prototype.swap = function(m, n){
    var temp = this.array[m]
    this.array[m] = this.array[n]
    this.array[n] = temp
  }

  // 实现排序算法

  // 冒泡排序
  // 需要排序比较n(n-1)/2轮 每轮两次交换 所以需要 n(n-1)/4 时间复杂度O(n²)
  ArrayList.prototype.bubbleSort = function() {
    // 获取数组的长度
    var length = this.array.length
    for(var j = length - 1; j >= 0; j--){
      for(var i = 0; i < j; i++){
        // 第一次进来：i=0; 比较 0和1位置的两个数据
        // 最后一次进来：i = length-1 比较length-1 和 length
        if(this.array[i] > this.array[i+1]){
          // 交换两个数据 使用一个临时变量
          this.swap(i, i+1)
        }
      }
    }
  }

  // 选择排序
  // 相比冒泡排序将交换的次数O(N²)减少到O(N) 每次比较只进行一次交换
  // 比较次数是(n-1)+(n-2)+...+1 -> 共有n(n-1)/2次 因为每次都要全部比较找出最小的那个数
  ArrayList.prototype.selectSort = function () {
    var len = this.array.length

    // 外层循环: 从0开始取数据
    for(var i = 0; i< len-1; i++) {
      //从前往后依次选出一个最小的，所以要排n-1次
      var min = i;
      // 内层循环：从min+1开始取数据
      for(var j = min+1; j < len; j++){
        if(this.array[min]>this.array[j]){
          min = j
        }
      }
      this.swap(min, i)
    }
  }

  //插入排序
  ArrayList.prototype.InsertionSort = function (){
    var len = this.array.length
    // 外层循环 从第一个位置开始获取数据,向前局部有序插入
    for(var i = 1; i < len; i++) {
      // 内层循环, 获取i的位置的元素，和前面的数据依次进行比价
      var temp = this.array[i]
      var j = i
      while(this.array[j-1] > temp && j>0){
        this.array[j] = this.array[j-1]
        j--
      }
      // 4. 将j位置的数据,放置temp
      this.array[j] = temp
    }
  }

  // 希尔排序
  ArrayList.prototype.shellSort = function () {
    // 1. 获取数组的长度
    var length = this.array.length
    // 2. 初始化的增量(gap -> 间距/间隔)
    var gap = Math.floor(length/2)
    // 3. while (gap不断减小)
    while(gap >= 1){
      console.log(gap)
      // 4. 以gap作为间隔进行一个插入排序
      for (var i = gap; i<length; i++) {
        var temp = this.array[i]
        var j = i
        while (this.array[j-gap] > temp && j > gap -1) {
          this.array[j] = this.array[j-gap]
          j -= gap
        }
        // 5. 将j位置的元素赋值给temp
        this.array[j] = temp
      }
      gap = Math.floor(gap/2)
    }
  }


  ArrayList.prototype.median = function (left, right) {
    var center = Math.floor((left + right) / 2)
    // 2. 进行一个排序
    if(this.array[left] > this.array[center]){
      this.swap(left, center)
    }
    if(this.array[left] > this.array[right]){
      this.swap(left, center)
    }
    if (this.array[center] > this.array[right]){
      this.swap(center, right)
    }

    this.swap(center, right-1)
    return this.array[right - 1]
  }
  // 快速排序 平均复杂度 O(N*logN)
  // left = 0 right = length - 1 center = (left+right)/2
  ArrayList.prototype.quickSort = function() {
    this.quick(0, this.array.length-1)
    // 1. 选择枢纽
  }
  
  ArrayList.prototype.quick = function(left, right) {
    // 结束条件
    if (left >= right) return 

    // 获取枢纽
    var pivot = this.median(left, right) 

    // 定义变量 用于记录当前找到的位置
    var i = left
    var j = right - 1

    // 开始进行交换
    while(true){
      while(this.array[++i] < pivot){
      }
      while(this.array[--j] > pivot ){}
      if(i < j) {
        this.swap(i ,j)
      }else {
        break
      }
    }

    this.swap(i, right-1)

    this.quick(left, i-1)
    this.quick(i+1, right)
  }
  // 统计出现次数最多一个数字,并指明出现了几次
}

//测试类

var list = new ArrayList()

list.insert(8)
list.insert(3)
list.insert(4)
list.insert(15)
list.insert(2)
list.insert(5)

// 8 3 4 15 2 5
// ---开始操作---
// 3 8 4 15 2 5
// 3 4 8 15 2 5
// 3 4 8 15 2 5
// 
// list.InsertionSort()
list.quickSort()
console.log(list)