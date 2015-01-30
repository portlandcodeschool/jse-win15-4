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

	newDeque.length = makeDeque.length;

	return newDeque;
};

// The factory's instance methods:
makeDeque.length = function() {
		
}

makeDeque.top = function() {
	//...
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

