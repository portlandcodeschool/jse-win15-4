var test = [1, 2, 3, 4, 5, 6, 7];
// Problem 2a): build a deque factory
//-------

// The factory itself:
function makeDeque(values) {

	var instance = {};
	instance.array = values;
	instance.length = makeDeque.theLength;
	instance.top = makeDeque.top;
	instance.bottom = makeDeque.bottom;
	instance.pop = makeDeque.pop;
	instance.push = makeDeque.push;
	instance.shift = makeDeque.shift;
	instance.unshift = makeDeque.unshift;
	instance.cut = makeDeque.cut;
	instance.map = makeDeque.map;
	instance.sort = makeDeque.sort;
	instance.shuffle = makeDeque.shuffle;
	// return an instance object
	return instance;
}

// The factory's instance methods:
makeDeque.theLength = function() {
	return this.array.length;
};

makeDeque.top = function() {
	return this.array[0];
};

makeDeque.bottom = function() {
	return this.array[(this.array.length) - 1];
};

makeDeque.pop = function() {
	return this.array.pop();
};

makeDeque.push = function(val) {
	return this.array.push(val);
};

makeDeque.shift = function() {
	return this.array.shift();
};

makeDeque.unshift = function(val) {
	return this.array.unshift(val);
};

makeDeque.cut = function() {
	//get array length
	var arrLength = this.array.length;
	//round down for split
	middle = Math.floor(arrLength / 2);
	//split at that point, make two new arrays
	var rightHalf = this.array.splice(middle, arrLength);
	var leftHalf = this.array;
	//swap the two new arrays
	this.array = rightHalf.concat(leftHalf);
	//rejoin them?
	return this.array;

};  
/*
makeDeque.cut = function() {
	//get array length
	var arrLength = this.array.length;
	//round down for split
	middle = Math.floor(arrLength / 2);
	//split at that point, make two new arrays
	var rightHalf = this.array.splice(middle, arrLength);
	//var leftHalf = this.array;
	//swap the two new arrays
	//this.array = leftHalf.concat(rightHalf);
	//rejoin them?
	return rightHalf.concat(this.array);

}; */

makeDeque.convertValFn = function(val) {

};

makeDeque.map = function(convertValFn) {
	mappedArray = this.array.map(convertValFn);
	return mappedArray;
};

// compareValsFn = function(x,y) {	
//  	return x - y;
// };

makeDeque.sort = function(compareValsFn) {
	sortedArray = this.array.sort(compareValsFn);
	return sortedArray;
};

//Used the suggested Knuth-Fisher-Yates algorithm
makeDeque.shuffle = function() {
  var toShuffle = this.array;
  var m = toShuffle.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = toShuffle[m];
    toShuffle[m] = toShuffle[i];
    toShuffle[i] = t;
  }

  return toShuffle;
};

// Feel free to write tests for your code!
var testResults = makeDeque(test);

// ascendingSuit = function() {
// 	theDeck = this.array;
// 	console.log(theDeck);
// };

var theTest = makeDeque(test);
// function assert(claim,message) {
//     if (!claim) console.error(message);
// };

// console.log(testResults.array);
// assert(testResults.cut()==[ 5, 6, 7, 1, 2, 3, 4 ], "test 1 failed")
