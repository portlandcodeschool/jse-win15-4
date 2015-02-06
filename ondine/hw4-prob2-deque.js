// Problem 2a): build a deque factory

// The factory itself:
function makeDeque(values) {
	return {
	  array: values.slice(0),
	  length: makeDeque.arrLength,
	  top: makeDeque.top,
	  bottom: makeDeque.bottom,
	  pop: makeDeque.pop,
	  push: makeDeque.push,
	  shift: makeDeque.shift,
	  unshift: makeDeque.unshift,
	  cut: makeDeque.cut,
	  map: makeDeque.map,
	  sort: makeDeque.sort,
  };
	// return an instance object
}

// The factory's instance methods:
makeDeque.arrLength = function() { // get current length, not change it
	return this.array.length;
};

makeDeque.top = function() {  // element on top (or undefined if length = 0)
	var val = this.array.length-1;
	return this.array.length > 0? this.array[val]: undefined;
};

makeDeque.bottom = function() {
	return this.array[0];
};

makeDeque.pop = function() {
	return this.array.pop;
};

makeDeque.push = function() {
	return this.array.push;
};

makeDeque.shift = function() {
	return this.array.shift;
};

makeDeque.unshift = function() {
	return this.array.unshift;
};

makeDeque.cut = function() {
	// split the deque at the middle or above the middle if 
	// odd number of elements
	// if fewer than 2 items, no change
	// element below split is new top element after swapping
	// swap the two halves
  var arrLength = this.array.length;
  var splitLength = Math.ceil(arrLength/2);
    if (splitLength == arrLength)
    	 return 0;
	var lastHalf = this.array.splice(splitLength, arrLength);
	this.array = lastHalf.concat(this.array);
	return lastHalf.length;
};

makeDeque.map = function(convertValFn) {
	return this.array.map(convertValFn);
};

makeDeque.sort = function(compareValsFn) {
	return this.array.sort(compareValsFn);
};

// Feel free to write tests for your code!

