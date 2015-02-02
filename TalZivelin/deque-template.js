// Problem 2a): build a deque factory
//-------

fullSet = []; //<-- instead, generate array of 52 card instances
for (var i = 0; i < 52; i++){
	fullSet.push((i));
}


// The factory itself:
function makeDeque(values) {
	
	var  newDeque= {
    arr : fullSet.slice(0),
		length: makeDeque.arrlength,
		top: makeDeque.top,
		bottom: makeDeque.bottom,
		pop: makeDeque.pop,
		push: makeDeque.push,
		shift: makeDeque.shift,
		unshift: makeDeque.unshift,
		cut: makeDeque.cut,
		map: makeDeque.map,
		sort: makeDeque.sort
    
  }
  
  return newDeque
}

// The factory's instance methods:
makeDeque.arrlength = function() {
	return this.arr.length;
}

makeDeque.top = function() {
	return this.arr[(this.arr.length) - 1];
}

makeDeque.bottom = function() {
	return this.arr[0];
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

makeDeque.unshift = function() {
	return this.arr.unshift()
}

makeDeque.cut = function() {
	var middle = Math.floor(this.arr.length/2);
	var firstHalf= [],
		secondHalf = [];

	for (var i = 0; i < this.arr.length; i++) {
		if (i <= middle - 1) {
			firstHalf[i] = this.arr[i];
		} else {
			secondHalf.push(this.arr[i]);
		}
		
	}
	
	
	this.arr = secondHalf.concat(firstHalf);
	return this.arr;
}

/*makeDeque.map = function(convertValFn) {
	return this.arr.map()
}

makeDeque.sort = function(compareValsFn) {
	return this.arr.sort()
}*/

// Feel free to write tests for your code!

var testResults = makeDeque(fullSet)


console.log("length " + testResults.length())
console.log("top " + testResults.top())
console.log("bottom " + testResults.bottom())
console.log("pop " + testResults.pop())
console.log("shift " + testResults.shift())
console.log("unshift " + testResults.unshift())
console.log("cut " + testResults.cut())