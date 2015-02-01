// Problem 2a): build a deque factory
//-------

// The factory itself:
function makeDeque(values) { //input needs to be [1, 2, 3]
	// ...
	// return an instance object
		// create an object
		// create a property of the object that is an array
		// everytime makeDeque is called	add the values parameter to the array

		var newDeque = {
		array: values
		};

	newDeque.length2 = makeDeque.length2;
	newDeque.top = makeDeque.top;
	newDeque.bottom = makeDeque.bottom;
	newDeque.pop = makeDeque.pop;
	newDeque.push = makeDeque.push;
	newDeque.shift = makeDeque.shift;
	newDeque.unshift = makeDeque.unshift;

	return newDeque;
};

// The factory's instance methods:
makeDeque.length2 = function() {
	var length = this['array'].length;
	return length;
}

makeDeque.top = function() {
	var top = this.array[this.array.length-1];
	return top;
}

makeDeque.bottom = function() {
	var bottom = this.array[0];
	return bottom;
}

makeDeque.pop = function() {
	var pop = this.array.pop();
	return pop;
}

makeDeque.push = function(val) {
	var push = this.array.push(val);
	return push;
}

makeDeque.shift = function() {
	var shift = this.array.shift();
	return shift;
}

makeDeque.unshift = function(val) {
	var unshift = this.array.unshift(val);
	return unshift;
}

makeDeque.cut = function() {
	//...
}

makeDeque.map = function(convertValFn) {
	//...
}

makeDeque.sort = function(compareValsFn) {
	//...
}

// Feel free to write tests for your code!

var deck = [1, 2, 3, 4];
deck.slice(0, deck1.length-1)