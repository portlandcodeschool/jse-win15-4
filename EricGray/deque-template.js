// Problem 2a): build a deque factory
//-------

// The factory itself:
function makeDeque(values) { //values should be an array i guess
	// ...
	// return an instance object
	var  newDeque = {};
	newDeque.cardsInDeck = values;
	newDeque.length = makeDeque.length2;
	newDeque.top = makeDeque.top;
	newDeque.bottom = makeDeque.bottom;
	newDeque.push = makeDeque.push;
	newDeque.shift = makeDeque.shift;
	newDeque.unshift = makeDeque.unshift;
	newDeque.cut = makeDeque.cut;
	newDeque.sort = makeDeque.sort;
	newDeque.map = makeDeque.map;
	newDeque.pop = makeDeque.pop;

	return newDeque;
};

// The factory's instance methods:
makeDeque.length2 = function() {
	//...
	console.log(this.cardsInDeck);
	return this.cardsInDeck.length;
};

makeDeque.top = function() {
	//...
	return this.cardsInDeck[this.cardsInDeck.length-1];
};

makeDeque.bottom = function() {
	//...
	return this.cardsInDeck[0];
};

makeDeque.pop = function() {
	//...
	this.cardsInDeck.pop();
	return this.top();
};

makeDeque.push = function(val) {
	//...
	this.cardsInDeck.push(val);
	return this.top();
};

makeDeque.shift = function() {
	//...
	this.cardsInDeck.shift();
	return this.cardsInDeck[0];
};

makeDeque.unshift = function(val) {
	//...
	this.cardsInDeck.unshift(val);
	return this.cardsInDeck[0];
};	

makeDeque.cut = function() { //future -> helper function to decide even/odd/less than 2
							 //cards. clean up pushing 2 arrays to 1 array.
	//...
	var middle;		//variable to contain midpoint for cut
	if (this.cardsInDeck.length < 2) {	//don't cut for only 1 or 0 cards
		console.log("no changes necessary");
		return;
	} else if (this.cardsInDeck.length % 2 == 0) {
		var middle = this.cardsInDeck.length / 2;
	} else {
		var middle = (this.cardsInDeck.length+1) / 2;
	}
	var late = [];
	var early = [];
	console.log(late)
	console.log(early)
	console.log(middle);
	console.log(this.cardsInDeck);
	for (i = middle; i < this.cardsInDeck.length; i++)
		late.push(this.cardsInDeck[i]);
	for (i = 0; i < middle; i++)
		early.push(this.cardsInDeck[i]);
	this.cardsInDeck = [];
	console.log(late);
	console.log(early);
	console.log(middle);
	console.log(this.cardsInDeck);

	for (i = 0; i <= late.length-1; i++)
		this.cardsInDeck.push(late[i]);
	for (i = 0; i <= early.length-1; i++)
		this.cardsInDeck.push(early[i]);
	//this.cardsInDeck = [late, early];

	//figure out where the middle is;	
	//less than two items? ignore;
	//odd number? round up from middle;
	//split me into two arrays;
	//change the top array to the bottom array;
	return this.cardsInDeck;
};

makeDeque.map = function(convertValFn) {
	//...
	mappedArray = this.cardsInDeck.map(convertValFn);
	return mappedArray;
};

makeDeque.sort = function(compareValsFn) {
	//...
	sortedArray = this.cardsInDeck.sort(compareValsFn);
	return sortedArray;
};

//test variable
var dequeOne = makeDeque([7, 8, 9, 10, 11, 12])

// Feel free to write tests for your code!

