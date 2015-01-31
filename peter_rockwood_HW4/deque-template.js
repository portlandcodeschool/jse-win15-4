// Problem 2a): build a deque factory
//-------



// The factory itself:
function makeDeque(values) {
	var dequeType = {
		deque:   	 values.slice(),
		length:  	 makeDeque.howLong,
		top:     	 makeDeque.top,
		bottom:  	 makeDeque.bottom,
		pop:     	 makeDeque.pop,
		push:    	 makeDeque.push,
		shift:   	 makeDeque.shift,
		unshift: 	 makeDeque.unshift,
		cut:     	 makeDeque.cut,
		map:     	 makeDeque.mapper,
		sort:    	 makeDeque.sorter,
		shuffleSlow: makeDeque.shuffleSlow,
		shuffleFast: makeDeque.shuffleFast,
		badInput: 	 makeDeque.badInput, //2e

		discardPile: [],
		addToDiscardPile: makeDeque.addToDiscardPile 
		}
	return dequeType
}

makeDeque.badInput = function(val){ // 2e, check if card is/was in this.deque
	for(var i = 0; i<this.length(); i++){
		if(this.deque[i] === val){
			console.log('that item is already in the deck')
			return true
		}
	}

	for(var i = 0; i<this.length(); i++){
		if(this.discardPile[i] === val){
			console.log('that item was already in the deck')
			return true
		}
	}
	return false
}

// The factory's instance methods:
makeDeque.howLong = function() { 
	return this.deque.length
}

makeDeque.top = function() {
	return this.deque[this.deque.length-1]
}

makeDeque.bottom = function() {
	return this.deque[0]
}

makeDeque.pop = function() {
	this.addToDiscardPile(this.top()); //add to discardPile
	return this.deque.pop()
}

makeDeque.push = function(val) {
	if(this.badInput(val) === true){
		return
	}
	return this.deque.push(val)
}

makeDeque.shift = function() {
	this.addToDiscardPile(this.bottom());
	return this.deque.shift();
}


makeDeque.unshift = function(val) {
	return this.deque.unshift(val);
}


makeDeque.cut = function() {
	var halfDeque = Math.ceil(this.deque.length/2);
	var tempArray = this.deque.slice(halfDeque);
	for(var i = 0; i < halfDeque; i++){
		tempArray.push(this.deque[i]);
	}
	this.deque = tempArray.slice();
}

makeDeque.mapper = function(convertValFn) {
	return this.deque.map(convertValFn);
}

makeDeque.sorter = function(compareValsFn) {
	this.deque.sort(compareValsFn);
}

makeDeque.shuffleSlow = function(){
	function coinFlip(){
		var coin = Math.random()
		if(coin < .5) {
			return -1;
		}
		else {
			return 1
		}
	}
	this.deque.sort(coinFlip())
}

makeDeque.shuffleFast = function(){//adapted from Mike Bostock's Fisher-Yates implementation
	for(var i = this.deque.length-1; i > 0; i--){
		var randElement = Math.floor(Math.random() * i);
		var hold = this.deque[i];
		this.deque[i] = this.deque[randElement];
		this.deque[randElement] = hold
	}
}

makeDeque.addToDiscardPile = function(itemToAdd){
	this.discardPile[this.discardPile.length] = itemToAdd;
	return
};

// Feel free to write tests for your code!
/*
deckOfCards.pop()
discardPile
deckOfCards.shift()
discardPile
*/