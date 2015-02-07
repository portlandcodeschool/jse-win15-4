var rankName = ["", "Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
var suitName = ["", "Hearts", "Diamonds", "Spades", "Clubs"];

function makeCard(id) {

  if (!makeCard.isValid(id))
    return null;

  var card = {
    id: id,
    rank: makeCard.rank,
    suit: makeCard.suit,
    color: makeCard.color,
    name: makeCard.cardName
  };
  return card;
}

makeCard.isValid = function(id) {
  if (typeof id != 'number')
    return null;
  if (id%1 !== 0)
    return null;
  if (id < 0 || id > 51)
    return null;
  return true;
};

//-----------------------------
// Methods called though instances (where 'this' means the instance):
//-----------------------------

makeCard.rank = function() { // --> 1..13, NaN
  return Math.floor(this.id/4) + 1;
};

makeCard.suit = function() { // --> 1..4, NaN
  return (this.id%4) + 1;
};
   
makeCard.color = function() { // -->"red,"black",NaN
  var suitColor = this.suit();
  return (suitColor < 3) ? "red" : "black";
};

makeCard.cardName = function() { //--> string, NaN
    // This method can't have the key 'name' within the makeCard function,
    // but instance objects can store a reference to it called 'name'
    var rank = this.rank();
    var suit = this.suit();
    return rankName[rank] + " of " + suitName[suit];
};

//-----------------------
// Methods to be called through factory only:
//-----------------------

makeCard.isCard = function(thing) { // --> true,false
    // return true if thing is a valid card instance made by this factory
  return thing
    && (typeof thing === 'object')
    && (thing.name === makeCard.cardName)
    && ('id' in thing) && makeCard.isValid(thing.id);
};

/*
makeCard.isCard = function(card) { // --> true,false
    // return true if thing is a valid card instance made by this factory
  return (typeof card === 'object' ? true : false);
};

console.log("Test 24 fails. Is it an object but not an instance?");
*/
//---------------------
// Additional factory properties
//---------------------

makeCard.fullSet = []; //<-- instead, generate array of 52 card instances

for (var i = 0; i < 52; ++i) {
  makeCard.fullSet.push(
    makeCard(i));
}

//----------------------
// Simple Testing suite
// Supplement as needed!make

function assert(claim,message) {
    if (!claim) console.error(message);
}

// card instances needed for assertions:
var card0 = makeCard(0);
var card3 = makeCard(3);
var card5 = makeCard(5);
var card51 = makeCard(51);

// Test instance methods:
assert(card0.rank()===1,  "Test 1 failed");
assert(card3.rank()===1,  "Test 2 failed");
assert(card51.rank()===13,"Test 3 failed");
assert(card0.suit()===1,  "Test 4 failed");
assert(card5.suit()===2,  "Test 5 failed");
assert(card51.suit()===4, "Test 6 failed");
assert(card0.color()==='red',   "Test 10 failed");
assert(card3.color()==='black', "Test 11 failed");
assert(card5.name()==='Two of Diamonds', "Test 12 failed");
assert(card51.name()==='King of Clubs',  "Test 13 failed");

// Test makeCard.isCard:
assert(makeCard.isCard(card0),  "Test 21 failed")
assert(makeCard.isCard(card51), "Test 22 failed")
assert(!makeCard.isCard(0),    "Test 23 failed")
assert(!makeCard.isCard({}),   "Test 24 failed")


// Test failed card-making results:
assert(!makeCard(52),"Test 26 failed");
assert(!makeCard("0"),"Test 27 failed");
assert(!makeCard(-1),"Test 28 failed");
assert(!makeCard(false),"Test 30 failed");
assert(!makeCard(true),"Test 31 failed");


// Test fullSet array:
assert(typeof makeCard.fullSet === 'object', "Test 40 failed");
assert(makeCard.fullSet.length === 52, "Test 41 failed");
assert(makeCard.isCard(makeCard.fullSet[0]), "Test 42 failed")
assert(makeCard.fullSet[5].name() === card5.name(), "Test 43 failed");
assert(makeCard.fullSet[51].name() === card51.name(), "Test 44 failed");

// Test that methods are shared:
assert(card0 !== card3, "Test 50 failed"); //first prove different cards
assert(card0.rank === card3.rank, "Test 51 failed");
assert(card0.suit === card3.suit, "Test 52 failed");
assert(card0.name === card3.name, "Test 53 failed");
//etc...
