var Queue = function() {
  var someInstance = {};

 var storage = {};
 var start = 0;
 var end = 0;

  someInstance.enqueue = function(value) {
    storage[end++] = value;
  };

  someInstance.dequeue = function() {
    var result = storage[start];
    if ( someInstance.size() ) {
      delete storage[start];
      start++;
    }
    return result;
  };

  someInstance.size = function() {
    return end - start;
  };

  return someInstance;
};
