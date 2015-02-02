// Your card and deque factory code should be loaded into the browser before this file
// by the main.html container file.
// At this point, both makeCard and makeDeque should be defined.


// 2b:
// make a deque instance to store a full deck of cards:
var deckOfCards = makeDeque(makeCard.fullSet);


deckOfCards.sort(function(a,b) {
	return (a.suit() == b.suit()) ? (a.rank() - b.rank()):(a.suit() - b.suit());
});
deckOfCards.cut();
assert(deckOfCards.top().name() === 'King of Diamonds', 'Failed King of Diamonds test');

deckOfCards.sort(function(a,b) {
	if (a.name() > b.name()) {
		return 1;
	} else if (a.name() < b.name()) {
		return -1;
	} else {
		return 0;
	};
});
assert(deckOfCards.bottom().name() === 'Ace of Clubs', 'Failed Ace of Clubs test');
assert(deckOfCards.top().name() === 'Two of Spades', 'Failed Two of Spades test');



// 2c:
// make a deque instance to store student names:
var studentList = ['Eric', 'Jashie',  'Anton', 'Todd', 'Robert', 'Dallas', 'Peter', 'Tom', 'Greg', 'Ondine', 'Dan', 'Matt', 'Micheal', 'Brigitta', 'Tal', 'Ian', 'Kyle'];
var deckOfNames = makeDeque(studentList);

deckOfNames.sort(function(a,b) {
	if (a.charAt(1) > b.charAt(1)) {
		return 1;
	} else if (a.charAt(1) < b.charAt(1)) {
		return -1;
	} else {
		return 0;
	};
});

var theFinalName = deckOfNames.top(); //whoever is last via that sort
assert("Kyle" === theFinalName, 'Failed name test');



// 2d:
// first add a deque.shuffle() method in your factory, then...
var shuffledDeck = makeDeque(makeCard.fullSet);

shuffledDeck.badShuffle(function() {
	return 0.5 - Math.random();
});

var shuffledDeck2 = makeDeque(makeCard.fullSet);

console.log(shuffledDeck2.arr[1]);

shuffledDeck2.shuffle(function() {
	var m = shuffledDeck2.arr.length, t, i;
	while (m) {
		var i = Math.floor(Math.random() * m--);

		t =  shuffledDeck2.arr[m];
		shuffledDeck2.arr[m] = shuffledDeck2.arr[i];
		shuffledDeck2.arr[i] = t;
	}
	//This code shuffle code was adapted from http://bost.ocks.org/mike/shuffle/
});

console.log(shuffledDeck2.arr[1]);

// var ids = shuffledDeck.map( /* return-card-id function here */ );
// console.log(ids);
// var names = shuffledDeck.map( /* return-card-name function here */ );
//console.log(names);


