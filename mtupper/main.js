// Your card and deque factory code should be loaded into the browser before this file
// by the main.html container file.
// At this point, both makeCard and makeDeque should be defined.


// 2b:
// make a deque instance to store a full deck of cards:
var deckOfCards = makeDeque(makeCard.fullSet);

function sortBySuit(a,b) {
    if (a.suit() > b.suit()) return 1;
    if (a.suit() < b.suit()) return -1;
    //suits are equal; compare by rank
    if (a.rank() > b.rank()) return 1;
    if (a.rank() < b.rank()) return -1;
    return 0;
}

deckOfCards.sort(sortBySuit);

deckOfCards.cut();
assert(deckOfCards.top().name() === 'King of Diamonds', 'Failed King of Diamonds test');

function cardByName(a,b) {
    if (a.name() > b.name()) return 1;
    if (b.name() < b.name()) return -1;
    return 0;
}

deckOfCards.sort(cardByName);
assert(deckOfCards.bottom().name() === 'Ace of Clubs', 'Failed Ace of Clubs test');
assert(deckOfCards.top().name() === 'Two of Spades', 'Failed Two of Spades test');



// 2c:
// make a deque instance to store student names:

var people = [
    'Julie', 'Angela', 'John', 'Todd', 'Michael',
    'Kyle', 'Tricia', 'Michele', 'Kevin', 'Jared',
    'Eric', 'Scott', 'Patricia', 'Ian', 'Matias',
    'Zoe', 'Mark'
];

var deckOfNames = makeDeque(people);

function bySecondLetter(a,b) {
    return (a[1] > b[1]) ? 1 : -1;
}

deckOfName.sort(bySecondLetter);

var theFinalName = '/*someone*/'; //whoever is last via that sort
assert(everyone.top() === theFinalName, 'Failed name test');



// 2d:
// first add a deque.shuffle() method in your factory, then...
var shuffledDeck = makeDeque(makeCard.fullSet);

shuffledDeck.shuffle();

// Used the solution for this, not original content...
var ids = shuffledDeck.map(function(card){
    return card.id;
});
console.log(ids);
var names = shuffledDeck.map(function(card) {
    return card.name();
});
console.log(names);