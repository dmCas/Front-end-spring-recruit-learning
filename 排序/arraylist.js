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
}

//测试类

var list = new ArrayList()

list.insert(8)
list.insert(3)
list.insert(4)
list.insert(15)
list.insert(2)
list.insert(5)

list.selectSort()
console.log(list)