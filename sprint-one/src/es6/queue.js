class Queue {
  
 constructor() {
  this._storage = {};
  this._start = 0;
  this._end = 0;
 }

 enqueue(value) {
  this._storage[this._end++] = value;
 }

 dequeue() {
  var result = this._storage[this._start];
  if ( this.size() ) {
    delete this._storage[this._start];
    this._start++;
  }
  return result;	
 }

 size() {
  return this._end - this._start;
 }

}
