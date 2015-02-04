// Problem 2a): build a deque factory
	// var fullSet = [];
	// for (i = 0; i < 52; ++i){
	// 	fullSet.push(i)
	// };

// The factory itself:
function makeDeque(values) {
	// ...
	var deque = {
		arr: values.slice(),
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
};

makeDeque.top = function() {
	return (this.arr[this.arr.length - 1] )
}

makeDeque.bottom = function() {
	return this.arr[this.arr(0)]
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
	firstSlice = [];
	secondSlice = [];

	for(i = 0; i <= (this.fullSet.length/2) ; ++i) {
		return this.arr.push(firstSlice)
	}//for end 

	console.log(secondSlice);
	


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

