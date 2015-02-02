// Problem 2a): build a deque factory
//-------

// The factory itself:
function makeDeque(values) {		//values is the original arr value
	var deque = {};		// have to copy the array, cant use decque.array = value

		deque.array = values.slice(0); // copy of the array
		deque.length = makeDeque.arrLength;
		deque.top = makeDeque.top;
		deque.bottom = makeDeque.bottom;
		deque.pop = makeDeque.pop;
		deque.push = makeDeque.push;
		deque.shift = makeDeque.shift;
		deque.unshift = makeDeque.unshift;
		deque.cut = makeDeque.cut;
		deque.map = makeDeque.map;
		deque.sort = makeDeque.sort;

	// return an instance object
	return deque;
}

// The factory's instance methods:
makeDeque.arrLength = function() {
	return this.array.length;
}

makeDeque.top = function() {		// returns the value at array.length-1 (position)
	if (this.array.length-1 >= 0){
	return this.array[this.array.length-1]; // this is the value
	} else {
		return undefined;
	}	
}

makeDeque.bottom = function() {
	if(array[0] = ""){
		return undefined;
	} else {
		return this.array[0];
	}
}

makeDeque.pop = function() {
	return this.array.pop();   
}

makeDeque.push = function(val) {
	return this.array.push(val);  
}

makeDeque.shift = function() {
	return this.array.shift();
}

makeDeque.unshift = function(val) {
	return this.array.unshift(val);
}

makeDeque.cut = function() {
		var halfArray = this.array.slice(Math.ceil(this.array.length/2));
		this.array.push(halfArray);
		return this.array;
	}

makeDeque.map = function(convertValFn) {
	return this.array.map(convertValFn);
}

makeDeque.sort = function(compareValsFn) {
	return this.array.sort(convertValFn);
}

// Feel free to write tests for your code!

