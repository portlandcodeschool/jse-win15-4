// Your card and deque factory code should be loaded into the browser before this file
// by the main.html container file.
// At this point, both makeCard and makeDeque should be defined.


// 2b:
// make a deque instance to store a full deck of cards:
var deckOfCards = makeDeque(makeCard.fullSet); 
// makeDeque(makeCard.fullSet);

function compareByAscendingCardSuit(a,b) {
	if (a.suit() > b.suit()) return 1;
	if (a.suit() < b.suit()) return -1;
	//suits are equal; compare by rank
	if (a.rank() > b.rank()) return 1;
	if (a.rank() < b.rank()) return -1;
	return 0;
}


deckOfCards.sort(compareByAscendingCardSuit/* ascending-by-suit comparison function here */);
deckOfCards.cut();
assert(deckOfCards.top().name() === 'King of Diamonds', 'Failed King of Diamonds test');

function compareByCardName(a,b) {
	if (a.name() > b.name()) return 1;
	if (a.name() < b.name()) return -1;
	return 0;
}

deckOfCards.sort(compareByCardName/* alphabetic comparison function */);
assert(deckOfCards.bottom().name() === 'Ace of Clubs', 'Failed Ace of Clubs test');
assert(deckOfCards.top().name() === 'Two of Spades', 'Failed Two of Spades test');



// 2c:
// make a deque instance to store student names:
var deckOfNames;// = makeDeque( 17 names );

var deckOfNames = makeDeque(/* 17 names */);
deckOfName.sort(/*something*/);
var theFinalName = '/*someone*/'; //whoever is last via that sort
assert(everyone.top() === theFinalName, 'Failed name test');



// 2d:
// first add a deque.shuffle() method in your factory, then...
var shuffledDeck;// = makeDeque(makeCard.fullSet);

shuffledDeck.shuffle();
var ids = shuffledDeck.map( /* return-card-id function here */ );
console.log(ids);
var names = shuffledDeck.map( /* return-card-name function here */ );
console.log(names);


