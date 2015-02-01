// Problem 2a): build a deque factory
//-------

// The factory itself:
function makeDeque(values) {
	
	var  newDeque= {
		
		length: makeDeque.length,
		top: makeDeque.top,
		bottom: makeDeque.bottom,
		cut: makeDeque.pop,
		cut: makeDeque.push,
		cut: makeDeque.shift,
		cut: makeDeque.unshift,
		cut: makeDeque.cut,
		cut: makeDeque.map,
		cut: makeDeque.sort
    
  }
  
  return newDeque
}

// The factory's instance methods:
makeDeque.length = function() {
	return this.arr.length;
}

makeDeque.top = function() {
	return this.arr[0];
}

makeDeque.bottom = function() {
	return this.arr[(this.array.length) - 1];
}

makeDeque.pop = function() {
	return this.arr.pop();
}

makeDeque.push = function(val) {
	return this.arr.push()
}

makeDeque.shift = function() {
	return this.arr.shift()
}

makeDeque.unshift = function(val) {
	return this.arr.unshift()
}

makeDeque.cut = function() {
	
}

makeDeque.map = function(convertValFn) {
	return this.arr.map()
}

makeDeque.sort = function(compareValsFn) {
	return this.arr.sort()
}

// Feel free to write tests for your code!

var testResults = makeDeque(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)