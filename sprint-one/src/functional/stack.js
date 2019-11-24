var Stack = function() {
  
  var someInstance = {};
  var storage = {};
  var count = 0;

  someInstance.push = function(value) {
    storage[count++] = value;
  };

  someInstance.pop = function() {
    if (count === 0) {
      return;
    }
    --count;
    var popedValue = storage[count];
    delete storage[count];
    return popedValue;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
