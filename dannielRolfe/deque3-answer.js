// Problem 2a): build a deque factory
fullSet = [];
for (var i = 0; i < 52; i++){
	fullSet.push(makeCard[i])
};

// The factory itself:
function makeDeque(values) {
	// ...
	var deque = {
		values : values,
		top : makeDeque.top,
		bottom : makeDeque.bottom,
		shift : makeDeque.shift,
		unshift : makeDeque.unshift,
		cut : makeDeque.cut,
		sort : makeDeque.sort,
		compareValsFn : makeDeque.compareValsFn,
		map : makeDeque.map 

	}
	return deque ;
}

// The factory's instance methods:
makeDeque.length = function() {
	return this.arr.length;
}

makeDeque.top = function() {
	return (this.arr[this.array.length - 1] )
}

makeDeque.bottom = function() {
	return this.arr[this.array(0)]
};

makeDeque.pop = function() {
	return this.arr.pop; 
}

makeDeque.push = function(val) {
	return this.arr.push(val);
}

makeDeque.shift = function() {
	return this.arr.shift;
}

makeDeque.unshift = function(val) {
	return this.arr.unshift;
}

makeDeque.cut = function() {
	myNewDeque = this.arr.slice(0, Math.round(array[array.length/2]))
	return myNewDeque
	// for (i = 0; (Math.round(array.length/2) < i; i++) {
	// 	//I want to return the values of the array and push them into a new array
	// 	return this.array[].push(newArray1);
	// }; 

	// for (i = 0; (Math.round(array.length/2) > i; i++) {
	// 	//I want to return the values of the array and push them into a new array
	// 	return this.array[].push(newArray2);
	// }; 

	// console.log(newArray2.join(newArray1));


}

makeDeque.map = function(convertValFn) {
	//...
}

makeDeque.sort = function(compareValsFn) {
	//...
}

//Calling
var testResult = makeDeque([makeDeque.length])

// Feel free to write tests for your code!

console.log(makeCard);
