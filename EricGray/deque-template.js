// Problem 2a): build a deque factory
//-------

// The factory itself:
function makeDeque(values) {
	// ...
	// return an instance object
	var newDeque = {};
	cardsInDeck = [values];
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
	
}

makeDeque.map = function(convertValFn) {
	//...
}

makeDeque.sort = function(compareValsFn) {
	//...
}

// Feel free to write tests for your code!

