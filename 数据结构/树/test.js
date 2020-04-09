function BinarySearchTree() {
  function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
  this.root = null

  BinarySearchTree.prototype.insertNode = function(node, newNode) {
    if(newNode.value < node.value){
      if(node.left == null){
        node.left = newNode
      }
      else{
        this.insertNode(node.left, newNode)
      }
    }
    else{
      if(node.right == null){
        node.right = newNode
      }
      else{
        this.insertNode(node.right, newNode)
      }
    }
  }

  BinarySearchTree.prototype.insert = function(value){
    var newNode = new Node(value)
    if(!this.root){
      this.root = newNode
    }
    else{
      this.insertNode(this.root, newNode)
    }
  }

  BinarySearchTree.prototype.preOrderTraversal = function(){
    preOrderTraversalNode(this.root)
  }

  BinarySearchTree.prototype.preOrderTraversalNode = function(node) {
    if(node !== null){

      preOrderTraversalNode(node.left)
    }
  }
}

var treeNode = new BinarySearchTree()
treeNode.insert(5)
treeNode.insert(3)
treeNode.insert(6)
treeNode.preOrderTraversal()
console.log(treeNode)