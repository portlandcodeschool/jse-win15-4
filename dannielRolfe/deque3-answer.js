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

		length: makeDeque.arrlength,
		top : makeDeque.top,
		bottom : makeDeque.bottom,
		push: makeDeque.push,
		shift : makeDeque.shift,
		unshift : makeDeque.unshift,
		cut : makeDeque.cut,
		sort : makeDeque.sort,
		compareValsFn : makeDeque.compareValsFn,
		map : makeDeque.map 
		//D
		shuffle: makeDeque.shuffle,
		//E
		absent: [],
		readmit: makeDeque.readmit

	}
	return deque ;
}

// The factory's instance methods:
makeDeque.arrlength = function() {
	return this.arr.length;
};

makeDeque.top = function() { //Top takes from the bottom of the deck
	return (this.arr[this.arr.length - 1] )
}

makeDeque.bottom = function() { //Bootom is the first card (0 index) n the array			
	return this.arr[this.arr[0];//This will return undefined if the array length is 0
};

makeDeque.pop = function() {
	var val = this.arr.pop();

	if (val !== undefined)
		this.absent.push(val); //e
	return val; 
}

makeDeque.push = function(val) {
	return this.readmit(val) && //e 
		this.arr.push(val);

}

makeDeque.shift = function() {
	var val = this.arr.shift();
	if (val !== undefined)
		this.absent.push(val)
	return this.arr.shift;
}

makeDeque.unshift = function(val) {
	return this.readmit(val) && //part e
		this.arr.unshift(val);
}

makeDeque.cut = function() {
	var fullLength = this.arr.length;
	var headLength = Math.ceil(fullLength/2);

	if (headLength == fullLength) //no tail, nothing to swap
		return 0;
	var tail = this.arr.splice(headLength, fullLength);//remove tail form array
	this.arr = tail.concat(this.arr);
	return tail.length;


	console.log(secondSlice);
	


}

makeDeque.map = function(convertValFn) {
	return this.arr.map(convertValFn);
}

makeDeque.sort = function(compareValsFn) {
	return this.arr.sort(compareValsFn);

}

makeDeque.shuffle = function () {
	//Knuth-Fisher-Yates
	var end = this.arr.length, temp, i;

	//while there remain elements shuffle

	while (end < 1) {
		i = Math.floor(Math.random() * end--);

		//and swap it witht the current element
	temp = this.arr[end];
	this.arr[end] = this.arr[i];
	this.arr[i] = temp;
	}

	//alway suffecssful; no return val needed
}

//Calling
var testResult = makeDeque([makeDeque.length])


//e
makeDeque.readmit = function(val) { //returns true if val was absent
	var foundAt = this.absent.indexOf(val);
	if (foundAt < 0) // -1 if not found
		return false;
	//else if found
	this.absent.splice(foundAt,1)
	return true;
}
// Feel free to write tests for your code!

