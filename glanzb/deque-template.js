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
	return this.array[this.array.length-1]; // this is the value
}

makeDeque.bottom = function() {
	return this.array[0];
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

// makeDeque.cut = function() {
// 		var halfArray = this.array.slice(Math.ceil(this.array.length/2));
// 		this.array.push(halfArray);
// 		return this.array;
// 	}
// from solution:
makeDeque.cut = function() {
	var fullLength = this.array.length;
	var headLength = Math.ceil(fullLength / 2);
	if (headLength == fullLength) // no tail, nothing to swap
		return 0;
	var tail = this.array.splice(headLength, fullLength); // removes tail from array
	this.array = tail.concat(this.array); // swap tail and remaining head
	return tail.length;  //returns # elements moved from upper half to lower (0 if no change)
}

makeDeque.map = function(convertValFn) {
	return this.array.map(convertValFn); // convertvaValFn is like a pleceholder
}

makeDeque.sort = function(compareValsFn) {
	return this.array.sort(compareValsFn);
}

// Feel free to write tests for your code!
// Dan's solution
// ---- Part d)----

makeDeque.shuffle = function () {
	// Knuth-Fisher-Yates, modified from http://bost.ocks.org/mike/shuffle/
	var end = this.array.length, temp, i;

  	// While there remain elements to shuffle…
  	while (end>1) {

    	// Pick a remaining element…
    	i = Math.floor(Math.random() * end--);

    	// And swap it with the current element.
    	temp = this.array[end];
    	this.array[end] = this.array[i];
    	this.array[i] = temp;
  	}
  	// always successful; no return val needed
}

// ---- Part e)----

makeDeque.readmit = function(val) { // returns true if val was absent
	var foundAt = this.absent.indexOf(val);
	if (foundAt < 0) // -1 if not found
			return false;
	// else found; excise from absent array
	this.absent.splice(foundAt,1);
	return true;
}

// e checks the original array, makes sure that only the original set is used
