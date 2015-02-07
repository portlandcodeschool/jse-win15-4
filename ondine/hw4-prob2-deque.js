// Problem 2a): build a deque factory

// The factory itself:
function makeDeque(values) {
	// return an instance object
	return {
	  array: values.slice(0), // shallow copies values array
	  length: makeDeque.arrLength,
	  top: makeDeque.top,
	  bottom: makeDeque.bottom,
	  pop: makeDeque.pop,
	  push: makeDeque.push,
	  shift: makeDeque.shift,
	  unshift: makeDeque.unshift,
	  cut: makeDeque.cut,
	  map: makeDeque.map,
	  sort: makeDeque.sort,
	  shuffle: makeDeque.shuffle,
	  missing: [],
    submit: makeDeque.submit
  };
}

// The factory's instance methods:
makeDeque.arrLength = function() { // get current length, not change it
	return this.array.length;
};

makeDeque.top = function() {  // element on top (or undefined if length = 0)
	var val = this.array.length-1;
	return this.array.length > 0 ? this.array[val] : undefined;
};

makeDeque.bottom = function() {
	return this.array[0];
};
/* original Parta functions before improvement:

makeDeque.pop = function() {
	return this.array.pop;
};

makeDeque.push = function(val) {
	return this.array.push;
};

makeDeque.shift = function() {
	return this.array.shift;
};

makeDeque.unshift = function() {
	return this.array.unshift;
};
*/

// 2e): Fix functions to prevent adding invalid elements (e.g. extra aces)

makeDeque.pop = function() {
	var val = this.array.pop();
	if (val != undefined)
		this.missing.push(val);
	return val;
};

makeDeque.push = function(val) {
	return this.submit(val) && 
	  this.array.push(val);
};

makeDeque.shift = function() {
	var val = this.array.shift();
	if (val != undefined)
		this.missing.push(val);
	return val;
};

makeDeque.unshift = function(val) {
	return this.submit(val) && 
	  this.array.unshift(val);
};

makeDeque.submit = function(val) {
  var cardAt = this.missing.indexOf(val); // indexOf is -1, val does not exist
  if (cardAt < 0);
    return false;
  this.missing.splice(cardAt, 1); // start at cardAt, deleteCount = 1 (remove one element)
    return true;
}

// Part a continued:

makeDeque.cut = function() {
	// split the deque at the middle or above the middle if 
	// odd number of elements
	// if fewer than 2 items, no change
	// element below split is new top element after swapping
	// swap the two halves
  var arrLength = this.array.length;
  var splitLength = Math.ceil(arrLength/2);
    if (splitLength == arrLength)
    	 return 0;
	var lastHalf = this.array.splice(splitLength, arrLength);
	this.array = lastHalf.concat(this.array);
	return lastHalf.length;
};

makeDeque.map = function(convertValFn) {
	return this.array.map(convertValFn);
};

makeDeque.sort = function(compareValsFn) {
	return this.array.sort(compareValsFn);
};

// 2d): Shuffle function

// makeDeque.shuffle = function() {
// var shuffledDeck = [], num = this.array.length, i;
// while (num) {
// 	   i = Math.floor(Math.random() * n--);
// 	   shuffledDeck.push(this.array.splice(i, 1) [0]);
//   }
//   return shuffledDeck;
// };


// in-place Knuth-Fisher-Yates algorithm
// http://bost.ocks.org/mike/shuffle/

// Knuth-Fisher-Yates, modified

makeDeque.shuffle = function() {
  var end = this.array.length, temp, i;
  // While there remain elements to shuffle…
  while (end > 1) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * end--);

    // And swap it with the current element.
    temp = this.array[end];
    this.array[end] = this.array[i];
    this.array[i] = temp;
  }
  // always successful; no return val needed
}

// Feel free to write tests for your code!

