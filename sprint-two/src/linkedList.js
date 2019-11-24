var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    
    if (!list.head) {
      list.head = newNode;
    }

    if (!!list.tail) {
      list.tail.next = newNode;
    }

    list.tail = newNode;
    //console.log(list.head)
  };

  list.removeHead = function() {
    if (!list.head) {
      return;
    }
    var removedValue = list.head;
    list.head = list.head.next;
    return removedValue.value;
  };

  list.contains = function(target) {
    var currentNode = list.head;

    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      }

      currentNode = currentNode.next;
    }

    return false;
  }

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
