function arrayList() {
  this.array = []

  arrayList.prototype.insert = function(item){
    this.array.push(item)
  }

  arrayList.prototype.swap = function(m, n){
    let temp = this.array[m]
    this.array[m] = this.array[n]
    this.array[n] = temp
  }

  arrayList.prototype.bubbleSort = function(){
    var len = this.array.length  
    for(var i = len-1; i>=0; i--){
      for(var j = 0; j < i; j++){
        if(this.array[j] > this.array[j+1]){
          this.swap(j, j+1)
        }
      }
    }

  }

  arrayList.prototype.selectSort = function() {
    var len = this.array.length
    for (var i = 0; i<len; i++){
      var min = i;
      for (var j = i+1; j<len; j++) {
        if(this.array[j] < this.array[min]){
          min = j
        }
      }
      this.swap(min,i)
    }
  }

}

var list = new arrayList()

list.insert()
list.insert(3)
list.insert(4)
list.insert(10)
list.insert(8)

// list.bubbleSort()
list.selectSort()
console.log(list)