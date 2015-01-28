var cardRank = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 
                'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];

var cardSuit = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];





function makeCard(id) {
    // If id is invalid (out of range, etc)
    if(id > 51 || typeof(id) != 'number') {
    return null;
    };

    var newCard = {
        id: id
    };
    newCard.rank = makeCard.rank;
    newCard.suit = makeCard.suit;
    newCard.color = makeCard.color;
    newCard.cardName = makeCard.cardName;


    // Otherwise build an instance object with an id property,
    // representing one card, and attach to it four methods:
    //   rank()
    //   suit()
    //   color()
    //   name()
    // Each method property should be just a link to the corresponding method
    //  of the factory itself.

    return newCard;
}

//-----------------------------
// Methods called though instances (where 'this' means the instance):
//-----------------------------

makeCard.rank = function() { // --> 1..13, NaN
    if (this.id > 51 || typeof(this.id) == 'string' || this.id < 0 || this.id%1 !== 0 || this.id == undefined) {
      return NaN;
      } else {
        var rankNumber = Math.ceil((this.id + 1) / 4); //rank number is one more than array index since arrays start at 0 but ranks starts at 1
        return rankNumber;
    }
  };


makeCard.suit = function() { // --> 1..4, NaN
        if (this.id > 51 || typeof(this.id) == 'boolean' || this.id < 0 || this.id%1 !== 0) {
        return NaN;
    } else {
    var suitNumber = (this.id % 4) + 1; //suit number is one more than array index
    return suitNumber; 
    } 
};
   
makeCard.color = function() { // -->"red,"black",NaN
  if (typeof(this.id) == 'string' || this.id == true) {
    return NaN;
  } else {
    var cardColor = this.suit(id);
    if (cardColor >= 0 && cardColor <= 1) {
      cardColor = 'red';
    } else if (cardColor >= 2 && cardColor <= 3) {
      cardColor = 'black';
    }
  } return cardColor;
};

makeCard.cardName = function() { //--> string, NaN
    // This method can't have the key 'name' within the makeCard function,
    // but instance objects can store a reference to it called 'name'

    if (this.id == false || this.id < 0 || this.id > 51 || this.id%1 !== 0) {  // id == NaN does not work because NaN cannot equal NaN
    return NaN;
      } else {
      var cardName = this.rank(this.id);
      var cSuit = this.suit(this.id);
      var fullName = (cardRank[cardName - 1] + ' of ' + cardSuit[cSuit - 1]);
      return fullName;
  }
};


//-----------------------
// Methods to be called through factory only:
//-----------------------

makeCard.isCard = function(thing) { // --> true,false
    // return true if thing is a valid card instance made by this factory

}

//---------------------
// Additional factory properties
//---------------------

makeCard.fullSet = []; //<-- instead, generate array of 52 card instances



//----------------------
// Simple Testing suite
// Supplement as needed!

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



