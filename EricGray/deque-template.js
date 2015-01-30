// Problem 2a): build a deque factory
//-------

// The factory itself:
function makeDeque(values) { //values should be an array i guess
	// ...
	// return an instance object
	var newDeque = {};
	cardsInDeck = values;
	newDeque.length = makeDeque.length;
	newDeque.top = makeDeque.top;
	newDeque.bottom = makeDeque.bottom;
	newDeque.push = makeDeque.push;
	newDeque.shift = makeDeque.shift;
	newDeque.unshift = makeDeque.unshift;
	newDeque.cut = makeDeque.cut;
	newDeque.sort = makeDeque.sort;
	newDeque.map = makeDeque.map;
	newDeque.pop = makeDeque.pop;
}

// The factory's instance methods:
makeDeque.length = function() {
	//...
	return cardsInDeck.length;
}

makeDeque.top = function() {
	//...
	return cardsInDeck[this.length-1];
}

makeDeque.bottom = function() {
	//...
	return cardsInDeck[0];
}

makeDeque.pop = function() {
	//...
	cardsInDeck.pop();
	return makeDeque.top;
}

makeDeque.push = function(val) {
	//...
	cardsInDeck.push(val);
	return makeDeque.top;
}

makeDeque.shift = function() {
	//...
	cardsInDeck.shift();
	return cardsInDeck[0];
}

makeDeque.unshift = function(val) {
	//...
	cardsInDeck.unshift(val);
	return cardsInDeck[0];
}	

makeDeque.cut = function() {
	//...
	var middle;
	if (cardsInDeck.length < 2) {
		console.log("no changes necessary");
		return;
	} else if (cardsInDeck.length % 2 == 0) {
		var middle = cardsInDeck.length / 2;
		return middle;
	} else {
		var middle = (cardsInDeck.length+1) / 2;
		return middle;
	}
	var top = [];
	var bottom = [];

	for (i = middle; i <= cardsInDeck.length-1; i++)
		top = [i];
	for (i = 0; i <= middle; i++)
		bottom = [i];
	cardsInDeck = top + bottom;

	//figure out where the middle is;	
	//less than two items? ignore;
	//odd number? round up from middle;
	//split me into two arrays;
	//change the top array to the bottom array;
	return cardsinDeck;
}

makeDeque.map = function(convertValFn) {
	//...
	mappedArray = cardsInDeck.map(convertValFn);
	return mappedArray;
}

makeDeque.sort = function(compareValsFn) {
	//...
	sortedArray = cardsInDeck.sort(compareValsFn);
	return sortedArray;
}

// Feel free to write tests for your code!

