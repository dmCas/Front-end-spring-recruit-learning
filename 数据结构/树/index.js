function BinarySearchTrere() {
  function Node(key) {
    this.key = key
    this.left = null
    this.right = null
  }
  this.root = null
  
  BinarySearchTrere.prototype.insertNode = function(node, newNode){
    // 如果新节点小于node节点
    if (newNode.key < node.key){ // 向左查找
      if (node.left == null) {
        node.left = newNode
      }else{
        this.insertNode(node.left, newNode)
      }
    }else { // 向右查找
      if (node.right == null){
        node.right = newNode
      }else{
        this.insertNode(node.right, newNode)
      }
    }
  }

  BinarySearchTrere.prototype.insert = function(key){
    // 1.根据key创建节点
    var newNode = new Node(key)
    // 2.判断根节点是否有值
    if(this.root == null){
      this.root = newNode
    }
    else{
      this.insertNode(this.root, newNode)
    }
  }

  // 树的遍历
  // 1. 先序遍历
  BinarySearchTrere.prototype.preOrderTraversal = function () {
    this.preOrderTraversal(this.root)
  }
  // 对于某个节点进行遍历
  BinarySearchTrere.prototype.preOrderTraversalNode = function(node){
    if (node != null) {
      console.log(node.key)
    }
  }
}

var treeNode = new BinarySearchTrere()
treeNode.insert(2)
treeNode.insert(1)
console.log(treeNode)