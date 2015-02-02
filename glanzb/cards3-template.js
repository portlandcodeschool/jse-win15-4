function makeCard(id) {
    // If id is invalid (out of range, etc)
    if (!makeCard.isValid(id))
        return null;

    var card = {
        id : id,
        rank: makeCard.rank,
        suit: makeCard.suit,
        color: makeCard.color,
        name: makeCard.cardName
    };

    // Otherwise build an instance object with an id property,
    // representing one card, and attach to it four methods:
    //   rank()
    //   suit()
    //   color()
    //   name()
    // Each method property should be just a link to the corresponding method
    //  of the factory itself.
 return card;
};
    
makeCard.isValid = function(id) { // Returns--> null, true
        if ((typeof id)!="number") //wrong type
            return null;
        if (id%1 !== 0) //non-integer
            return null;
        if (id<0 || id>51) //out of range
            return null;
        return true;
};   
   
//-----------------------------
// Methods called though instances (where 'this' means the instance):
//-----------------------------

    makeCard.rank = function() { // --> 1..13, NaN
        return Math.floor(this.id/4)+1;
    };

    makeCard.suit = function() { // --> 1..4, NaN
        return (this.id%4)+1;
    };
       
    makeCard.color = function() { // -->"red,"black",NaN
        var suit = this.suit();
            return suit && ((suit<3)? "red": "black");
    };

    makeCard.rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten',
                'Jack','Queen','King'];
    makeCard.suitNames = ['','Hearts','Diamonds','Spades','Clubs'];

    makeCard.cardName = function() { //--> string, NaN
        var rank = this.rank();
        var suit = this.suit();
        return (makeCard.rankNames[rank]+' of '+makeCard.suitNames[suit]);  // card1.name()
    };

/* that instance here */
var card1 = makeCard(0);
console.log(card1);     //card1.name() etc

//-----------------------
// Methods to be called through factory only:
//-----------------------

makeCard.isCard = function(card) { // --> true,false
    // return true if thing is a valid card instance made by this factory
         return (typeof card == "object" ? true : false);   //makeCard.isCard(card1)
};


//---------------------
// Additional factory properties
//---------------------
//var fullSet =  '[makeCard(0), makeCard(1), ... makeCard(51)]';

var fullSet = [];
 //<-- instead, generate array of 52 card instances, the objects the factory makes
    for (var i = 0; i <= 51; ++i) {
        fullSet.push(makeCard(i));
        
        };
makeCard.fullSet = fullSet;
console.log(makeCard.fullSet);

// makeCard.fullSet[7]
// Object { id: 7, rank: makeCard.rank(), suit: makeCard.suit(), color: makeCard.color(), name: makeCard.cardName() }
// makeCard.fullSet[7].name()
// "Two of Clubs"


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



