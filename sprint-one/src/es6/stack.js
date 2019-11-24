class Stack {
  
  constructor() {
  	this.storage = {};
  	this.count = 0;
  }

  push(value) {
	 this.storage[this.count++] = value;
  }

  pop() {
  	if (this.count === 0) {
		return;
	 }
	 --this.count;
	 var popedValue = this.storage[this.count];
	 delete this.storage[this.count];
    return popedValue;
  }

  size() {
  	return this.count;
  }
}