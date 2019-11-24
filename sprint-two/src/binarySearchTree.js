var BinarySearchTree = function(value) {
  var binaryTree = Object.create(binaryTreePrototype);
  
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;
  
  return binaryTree;
};

var binaryTreePrototype = {};

binaryTreePrototype.insert = function(val) {
  if (val < this.value) {
  	if (!this.left) {
  		this.left = BinarySearchTree(val);
  	} else {
  		this.left.insert(val)
  	} 
  } else if (val > this.value) {
  		if (!this.right) {
  			this.right = BinarySearchTree(val);
  		} else {
  			this.right.insert(val);
  		}
  	}
};

binaryTreePrototype.contains = function(val) {
  if (this.value === val) {
    return true;
  } else if (val < this.value) {
    return !!(this.left && this.left.contains(val));
  } else if (val > this.value) {
    return !!(this.right && this.right.contains(val));
  }

};

binaryTreePrototype.depthFirstLog = function(callBack) {
 callBack(this.value);

  if (this.left) {
    this.left.depthFirstLog(callBack);
  }
  if (this.right) {
    this.right.depthFirstLog(callBack);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
