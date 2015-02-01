// Your card and deque factory code should be loaded into the browser before this file
// by the main.html container file.
// At this point, both makeCard and makeDeque should be defined.


// 2b:
// make a deque instance to store a full deck of cards:
var deckOfCards = makeDeque(makeCard.fullSet);

ascendingSuit = function(x,y) {
    var n = y.suit() - x.suit();
    if (n !== 0) {
        return n;
     }
     return y.rank() - x.rank();
      };

alphabeticalSort = function(x,y) {
	if (x.name() > y.name()) return -1;
	   else if (x.name() < y.name()) return 1;
	   else return 0;
};


deckOfCards.sort(ascendingSuit);
deckOfCards.cut();
console.log("For some reason when I call deckOfCards.cut() I wind up losing half of makeCard.fullset.  Other than that the cut method works perfectly, and when I tested the makeDeque.cut on other arrays I never ran in to the same problem. Any ideas what is causing this?");
assert(deckOfCards.top().name() === 'King of Diamonds', 'Failed King of Diamonds test');

deckOfCards.sort(alphabeticalSort);
assert(deckOfCards.bottom().name() === 'Ace of Clubs', 'Failed Ace of Clubs test');
assert(deckOfCards.top().name() === 'Two of Spades', 'Failed Two of Spades test');



//2c:
//make a deque instance to store student names:
var classList = ["Anton", "Eric", "Jahsie", "Kyle", "Tal", "Brigitta", "Greg", "Tupper", "Ondine", "Peter", "Todd", "Robert", "Dan", "Matt", "Tom", "Dallass"]
// var deckOfNames = makeDeque(classList);

alphaClass = function(x,y) {
	if (x.charAt(1) > y.charAt(1)) return -1;
   else if (x.charAt(1) < y.charAt(1)) return 1;
   else return 0;
}


var deckOfNames = makeDeque(classList);
deckOfNames.sort(alphaClass);
assert(deckOfNames.bottom() === "Dallass", 'Failed name test');
assert(deckOfNames.top() === "Kyle", 'Failed name test');


// 2d:
// first add a deque.shuffle() method in your factory, then...
var shuffledDeck = makeDeque(makeCard.fullSet);



// shuffledDeck.shuffle();
// var ids = shuffledDeck.map( /* return-card-id function here */ );
// console.log(ids);
// var names = shuffledDeck.map( /* return-card-name function here */ );
// console.log(names);


