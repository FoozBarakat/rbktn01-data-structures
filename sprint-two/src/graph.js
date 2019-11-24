var Graph = function() {
this.storage = {};
};


Graph.prototype.addNode = function(node) {
	this.storage[node] = [];
};

Graph.prototype.contains = function(node) {
	return this.storage[node] !== undefined;
};

Graph.prototype.removeNode = function(node) {
	for (var key in this.storage) {
		if(node !== key) {
			this.removeEdge(key, node);
		}
	}
	delete this.storage[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode) {
	return this.storage[fromNode].includes(toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode) {
	this.storage[fromNode].push(toNode);
	this.storage[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode) {
 	this.storage[fromNode].forEach((element, i) => {
 		if (element === toNode) {
 			this.storage[fromNode].splice(i, 1);
 		}
 	});

 	this.storage[toNode].forEach((element, i) => {
 		if (element === fromNode) {
 			this.storage[toNode].splice(i, 1);
 		}
 	});
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	for (var key in this.storage) {
		cb(key);
	}
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


