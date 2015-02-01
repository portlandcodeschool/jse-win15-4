// Problem 2a): build a deque factory
//-------

// The factory itself:
function makeDeque(values) {
	var newDeque = {
		arr: values,
		length: makeDeque.myLength,
		top: makeDeque.top,
		bottom: makeDeque.bottom,
		pop: makeDeque.pop,
		push: makeDeque.push,
		shift: makeDeque.shift,
		unshift: makeDeque.unshift,
		cut: makeDeque.cut,
		map: makeDeque.map,
		sort: makeDeque.sort,
	}
	// return an instance object
	return newDeque;
}

// The factory's instance methods:
makeDeque.myLength = function() {
	return this.arr.length;
}

makeDeque.top = function() {
	return this.arr[this.arr.length - 1];
}

makeDeque.bottom = function() {
	return	this.arr[0];
}

makeDeque.pop = function() {
	return this.arr.pop();
}

makeDeque.push = function(val) {
	return this.arr.push(val);
}

makeDeque.shift = function() {
	return this.arr.shift();
}

makeDeque.unshift = function(val) {
	return this.arr.unshift(val);
}

makeDeque.cut = function() {
	var cutPoint = Math.ceil(this.arr.length/2);
	var tempArrayBottom = [],
		tempArrayTop = [];

	for (var i = 0; i < this.arr.length; i++) {
		if (i <= cutPoint - 1) {
			tempArrayTop[i] = this.arr[i];
		} else {
			tempArrayBottom.push(this.arr[i]);
		}
		
	}

	this.arr = tempArrayBottom.concat(tempArrayTop);
	return this.arr;
}

makeDeque.map = function() {
	return this.arr.map(convertValFn);
}

makeDeque.sort = function() {
	return this.arr.sort(compareValsFn);
}

function compareValsFn(a,b) {
	return b - a;
}

function convertValFn(val) {
	return val * 2;
}

// Feel free to write tests for your code!
var x = [1, 2, 3, 4, 5, 6, 7];
var test1 = makeDeque(x);
