// Your card and deque factory code should be loaded into the browser before this file
// by the main.html container file.
// At this point, both makeCard and makeDeque should be defined.


// 2b:
// make a deque instance to store a full deck of cards:
var myCardFactory = new cardFactory();
cardFactory.makeFullSet(myCardFactory);

var myDequeFactory = new dequeFactory();

var myDeckOfCards = myDequeFactory.makeDeque(myCardFactory.fullSet);

console.log("--------------------------------BEFORE Sort by suit");
for (i=0; i< myDeckOfCards.deque.length; i++ ) {
	console.log( "card " + i + " is " + myDeckOfCards.deque[i].name() );
}
myDeckOfCards.sort(cardSortBySuitAscendingFn);
console.log("--------------------------------AFTER Sort by suit");
for (i=0; i< myDeckOfCards.deque.length; i++ ) {
	console.log( "card " + i + " is " + myDeckOfCards.deque[i].name() );
}

//* ascending-by-suit comparison function here */);
myDeckOfCards.cut();
assert(myDeckOfCards.top().name() === 'King of Diamonds', 'Failed King of Diamonds test');

//deckOfCards.sort(/* alphabetic comparison function */);
//assert(deckOfCards.bottom().name() === 'Ace of Clubs', 'Failed Ace of Clubs test');
//assert(deckOfCards.top().name() === 'Two of Spades', 'Failed Two of Spades test');



// 2c:
// make a deque instance to store student names:

//var deckOfNames;// = makeDeque( 17 names );

//var deckOfNames = makeDeque(/* 17 names */);
//deckOfName.sort(/*something*/);
//var theFinalName = '/*someone*/'; //whoever is last via that sort
//assert(everyone.top() === theFinalName, 'Failed name test');
//
//
//
//// 2d:

// first add a deque.shuffle() method in your factory, then...
var myShuffledDeck = myDequeFactory.makeDeque(myCardFactory.fullSet);
console.log("--------------------------------BEFORE Shuffled deck");
for (i=0; i< myShuffledDeck.deque.length; i++ ) {
	console.log( "card " + i + " is " + myShuffledDeck.deque[i].name() );
}
myShuffledDeck.shuffle();
console.log("--------------------------------AFTER Shuffled deck");
for (i=0; i< myShuffledDeck.deque.length; i++ ) {
	console.log( "card " + i + " is " + myShuffledDeck.deque[i].name() );
}




//shuffledDeck.shuffle();
//var ids = shuffledDeck.map( /* return-card-id function here */ );
//console.log(ids);
//var names = shuffledDeck.map( /* return-card-name function here */ );
//console.log(names);



