// Your card and deque factory code should be loaded into the browser before this file
// by the main.html container file.
// At this point, both makeCard and makeDeque should be defined.


// 2b:
// make a deque instance to store a full deck of cards:
var deckOfCards = makeDeque(makeCard.fullSet);

function dispnames () { deckOfCards.values.forEach(function (x) {console.log(x.name());}); }

function suitSort(a,b) {
	var a_s = a.suit();
	var b_s = b.suit();
	var a_r = a.rank();
	var b_r = b.rank();
	if ((a_s > b_s) || ((a_r > b_r) && (a_s == b_s))) { //a & b are in order if: A.suit > b.suit  OR (A.rank > B.rank AND A.suit equals B.suit)
		return 1;
	} else if ((b_s > a_s) || ((b_r > a_r) && (a_s == b_s))) { //a & b are OUT of order if: B.suit > A.suit  OR (B.rank > A.rank AND A.suit equals S.suit)
		return -1;
	} else {
		return 0;
	}
}

function alphaSort(a,b) {
	var a_s = a.name().split(' of ')[1][0]; //first letter of suit
	var b_s = b.name().split(' of ')[1][0];
	var a_r = a.name().split(' of ')[0][0]; //first letter of rank
	var b_r = b.name().split(' of ')[0][0];
	if ((a_r > b_r) || ((a_s > b_s) && (a_r == b_r))) { 
		return 1;
	} else if ((b_r > a_r) || ((b_s > a_s) && (a_r == b_r))) { 
		return -1;
	} else {
		return 0;
	}

}

deckOfCards.sort(suitSort);
deckOfCards.cut();
assert(deckOfCards.top().name() === 'King of Diamonds', 'Failed King of Diamonds test');

deckOfCards.sort(alphaSort);
assert(deckOfCards.bottom().name() === 'Ace of Clubs', 'Failed Ace of Clubs test');
assert(deckOfCards.top().name() === 'Two of Spades', 'Failed Two of Spades test');

// // 2c:
// // make a deque instance to store student names:
function nameSort(a,b) {
	if (a[1] > b[1]) {
		return 1;
	} else if (b[1] > a[1]) {
		return -1;
	} else {
		return 0;
	}
}
var names = ["Kyle","Jackie","Jamison","Julius","Stanley","Scot","Orville","Michael","Wilmer","Denice","Izetta","Zulema","Tanya","Regenia","Della","Lue","Kandra"]
var deckOfNames = makeDeque(names);
deckOfNames.sort(nameSort);
var theFinalName = 'Izetta'; //whoever is last via that sort
assert(deckOfNames.top() === theFinalName, 'Failed name test');


// // 2d:
// // first add a deque.shuffle() method in your factory, then...
var shuffledDeck = makeDeque(makeCard.fullSet);
shuffledDeck.shuffle();
var ids = shuffledDeck.map(function (x) { return x.id; });
console.log(ids);
var names = shuffledDeck.map(function (x) { return x.name(); });
console.log(names);


