var Stack = function() {
 
 this.count = 0;
 this.storage = {};
 
};

Stack.prototype.push = function(value) {
	this.storage[this.count++] = value;
}

Stack.prototype.pop = function() {
	if (this.count === 0) {
		return;
	}
	--this.count;
	var popedValue = this.storage[this.count];
	delete this.storage[this.count]
	return popedValue;
}

Stack.prototype.size = function() {
	return this.count;
}

