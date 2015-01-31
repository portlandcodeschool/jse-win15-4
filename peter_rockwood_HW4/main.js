////////////////////
//TO-DO:
////////////////////
//makeDeck.length doesn't work, always returns 1 ???
//



// Your card and deque factory code should be loaded into the browser before this file
// by the main.html container file.
// At this point, both makeCard and makeDeque should be defined.


// 2b:
// make a deque instance to store a full deck of cards:
var deckOfCards = makeDeque(makeCard.fullSet);

function compBySuitAndRank(a,b){		
	var soot = a.suit() - b.suit();
	return soot == 0 ? a.rank() - b.rank() : soot; 
}

console.log('2b:');
for(var i = 0; i < deckOfCards.deque.length; i++){
	console.log(deckOfCards.deque[i].id, deckOfCards.deque[i].name())
}

deckOfCards.sort(compBySuitAndRank);
deckOfCards.cut();
assert(deckOfCards.top().name() === 'King of Diamonds', 'Failed King of Diamonds test');

function compAlphabetic(a,b){
	a = a.name().toLowerCase();
	b = b.name().toLowerCase();
	if (a > b) {
    return 1;
  	}
  	if (a < b) {
    	return -1;
  	}
}


deckOfCards.sort(compAlphabetic);
assert(deckOfCards.bottom().name() === 'Ace of Clubs', 'Failed Ace of Clubs test');
assert(deckOfCards.top().name() === 'Two of Spades', 'Failed Two of Spades test');

// for(var i = 0; i < deckOfCards.deque.length; i++){
// 	console.log(deckOfCards.deque[i].id, deckOfCards.deque[i].name())
// }

// 2c:
// make a deque instance to store student names:
var deckOfNames;// = makeDeque( 17 names );

var deckOfNames = makeDeque(['Ondine Gallatin', 
							 'Brigitta Glanz', 
							 'Greg Borchers', 
                			 'Michael Tupper', 
                			 'Jahsie Ault', 
                			 'Peter Rockwood', 
                			 'Danniel Rolfe', 
                			 'Kyle Houston', 
                			 'Ian Davis', 
                			 'Anton Emery', 
                			 'James Mone', 
                			 'John Gale', 
                			 'Robert Tribbia', 
                			 'Kristopher Hutchinson', 
                			 'Tal Zevilin', 
                			 'Eric Gray', 
                			 'Todd Redmond']);

function compAlphaScndLtr(a,b){
	a = a.slice(1)
	b = b.slice(1)
	if(a > b){
		return 1
	} else if (a < b) {
		return -1
	}
}
deckOfNames.sort(compAlphaScndLtr);

var theFinalName = 'Kyle Houston'; //whoever is last via that sort
assert(deckOfNames.top() === theFinalName, 'Failed name test');

// for(var i = 0; i < deckOfNames.deque.length; i++){
// 	console.log(deckOfNames.deque[i][1] + deckOfNames.deque[i][2], deckOfNames.deque[i])
// }

 // 2d:
// first add a deque.shuffle() method in your factory, then...
var shuffledDeck = makeDeque(makeCard.fullSet);

shuffledDeck.shuffleFast();


var ids = shuffledDeck.map(function(obj){return obj.id});
console.log(ids);
var names = shuffledDeck.map( function(obj){return obj.name()});
console.log(names);




