// Your card and deque factory code should be loaded into the browser before this file
// by the main.html container file.
// At this point, both makeCard and makeDeque should be defined.


// 2b:
// make a deque instance to store a full deck of cards:
var deckOfCards = makeDeque(makeCard.fullSet);

function compareByAscendingCardSuit(a,b) {
  if (a.suit() < b.suit()) return -1;
  if (b.suit() < a.suit()) return 1;
  if (a.rank() < b.rank()) return -1;
  if (b.rank() < a.rank()) return 1;
  return 0;
}

deckOfCards.sort(compareByAscendingCardSuit);
deckOfCards.cut();
assert(deckOfCards.top().name() === 'King of Diamonds', 'Failed King of Diamonds test');

console.log(deckOfCards.bottom().name());
console.log(deckOfCards.top().name());

function compareByAlphabeticName(a,b) {
  if (a.name() < b.name()) return -1;
  if (b.name() < a.name()) return 1;
  return 0;
}

deckOfCards.sort(compareByAlphabeticName);
assert(deckOfCards.bottom().name() === 'Ace of Clubs', 'Failed Ace of Clubs test');
assert(deckOfCards.top().name() === 'Two of Spades', 'Failed Two of Spades test');

console.log(deckOfCards.bottom().name());
console.log(deckOfCards.top().name());

// 2c:
// make a deque instance to store student names:

var students = [
  'Anton','Brigitta','Danniel','Eric','Greg','Ian',
  'Jahsie','James','John','Kristopher','Kyle',
  'Michael','Ondine','Peter','Robert','Tal','Todd'];

var deckOfNames = makeDeque(students);

function compareBySecondAlpha(string1, string2) {
  return (string1[1] > string2[1]) ? 1 : -1;
}

deckOfNames.sort(compareBySecondAlpha);
var theFinalName = 'Kyle'; //whoever is last via that sort
assert(deckOfNames.top() === theFinalName, 'Failed name test');

console.log(deckOfNames.sort(compareBySecondAlpha));

// 2d:
// first add a deque.shuffle() method in your factory, then...
var shuffledDeck = makeDeque(makeCard.fullSet);

shuffledDeck.shuffle();

var ids = shuffledDeck.map(function(card) {
  return card.id;
});

console.log(ids);

var names = shuffledDeck.map(function(card) {
  return card.name();
});

console.log(names);







