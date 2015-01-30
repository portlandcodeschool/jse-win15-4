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

	return newDeque;
};

// The factory's instance methods:
makeDeque.length2 = function() {
	var length = this['array'].length;
	return length;
}

makeDeque.top = function() {
	var top = ;
	return top;
}

makeDeque.bottom = function() {
	//...
}

makeDeque.pop = function() {
	//...
}

makeDeque.push = function(val) {
	//...
}

makeDeque.shift = function() {
	//...
}

makeDeque.unshift = function(val) {
	//...
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

