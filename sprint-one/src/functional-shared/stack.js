var Stack = function() {
 
 var someInstance = {};
 _.extend(someInstance, stackMethods);

 someInstance.storage = {};
 someInstance.count = 0;
 
 return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
	this.storage[this.count++] = value;
}

stackMethods.pop = function() {
	if (this.count === 0) {
		return;
	}
	--this.count;
	var popedValue = this.storage[this.count];	
	delete this.storage[this.count];
	return popedValue;
}

stackMethods.size = function() {
	return this.count;
}
