
function cardFactory() {
		
	// **** properties of each factory
	// create the fullSet reference copy for the factory
	this.fullSet = [];
	
	this.makeCard = function (id) {
			    
	    // If id is invalid (out of range, etc)
		if (cardFactory.isValidID(id)) { 
			// **** properties of each card
	    	var theNewCard = {};
		    theNewCard.id = id;
		    theNewCard.rank = cardFactory.rank;
		    theNewCard.suit = cardFactory.suit;
		    theNewCard.color = cardFactory.color;
		    theNewCard.name = cardFactory.getCardName;
		    // ****
		    return theNewCard;
		} else {
			return null;  // bad ID
		}	    
	};
};

//-----------------------------
// Methods called though instances (where 'this' means the card instance):
//-----------------------------

cardFactory.rank = function() { // --> 1..13, NaN
      	return Math.trunc(this.id/4)+1; 
};

cardFactory.suit = function() { // --> 1..4, NaN
		return (this.id%4)+1;
	};
   
cardFactory.color = function() { // -->"red,"black",NaN
    var cardColor = "";
	
	if ( (this.suit(this.id) === 0) || (this.suit(this.id) === 1 ) ) {
		cardColor = "red";
	} else {
		cardColor = "black";
	};
	return cardColor;
};

cardFactory.getCardName = function() { //--> string, NaN
    var suitNames = ["Hearts", "Diamonds", "Spades", "Clubs"];
	var rankNames = ["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King"];
    var cardName = "";
    cardName = rankNames[this.rank(this.id)-1] + " of " 
    		 + suitNames[this.suit(this.id)-1];
    return cardName;		 
};

//-----------------------------
// >>>>>>>> HELPER FUNCTIONS - 
//-----------------------------

cardFactory.isValidID = function(id){
	// validate inputs
	if (!( (typeof id === 'number')
		&& (id%1 === 0)  // is integer
		&&  id < 52      // is in range
		&&  id >= 0))    // is in range
	{   
		return false;   // INPUT ERROR
	} else {
		return true;
	}  	
};

cardFactory.makeFullSet = function(factoryInstance){
	
	for (var i = 0; i < 52; i++) {
		factoryInstance.fullSet[i] = factoryInstance.makeCard(i);
	}
	cardFactory.printFullSet(factoryInstance.fullSet);
};

cardFactory.printFullSet = function(fullSet)
{
	// verbose output
	// TODO add some error checking
	console.log("< ******  --> START of call to cardFactory.makeFullSet() **** ");
	console.log("A new deck is born **** >");	
	for (var i = 0; i < fullSet.length; i++) {
		console.log("Card ID="+ i + " name() returned: " + fullSet[i].name());
	}
	console.log("********* --> END of call to cardFactory.makeFullSet() **** >");
}



//-----------------------
// Methods to be called through factory only:
//-----------------------

cardFactory.isCard = function(cardObj) { 
	// TODO look for more authoritative methods that would be a higher bar to validate (i.e. security standards)
	// However, a simple "quacks like a duck==is duck-ish" test will work, so just enumarate the methods and validate the id.
	var isACard = true;
	
	if (!(cardFactory.isValidID(cardObj.id))) {
		isACard = false;
	};

	if (  isACard &&					// TODO add more robust validations here
		!(( 'rank'  in cardObj) &&
	      ( 'suit'	in cardObj) &&
	      ( 'color' in cardObj) &&
	      ( 'name'	in cardObj)    )){
		isACard = false;
	};
	return isACard;
};




//----------------------
// Simple Testing suite
// Supplement as needed!

function assert(claim,message) {
    if (!claim) console.error(message);
}

// create a factory
var myCardFactory = new cardFactory();
cardFactory.makeFullSet(myCardFactory);

// card instances needed for assertions:
var card0 = myCardFactory.makeCard(0);
var card3 = myCardFactory.makeCard(3);
var card5 = myCardFactory.makeCard(5);
var card51 = myCardFactory.makeCard(51);

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

// Test CardFactory.isCard:
assert(cardFactory.isCard(card0),  "Test 21 failed");
assert(cardFactory.isCard(card51), "Test 22 failed");
assert(!cardFactory.isCard(0),    "Test 23 failed");
assert(!cardFactory.isCard({}),   "Test 24 failed");


// Test failed card-making results:
assert(!myCardFactory.makeCard(52),"Test 26 failed");
assert(!myCardFactory.makeCard("0"),"Test 27 failed");
assert(!myCardFactory.makeCard(-1),"Test 28 failed");
assert(!myCardFactory.makeCard(false),"Test 30 failed");
assert(!myCardFactory.makeCard(true),"Test 31 failed");


// Test fullSet array:
assert(typeof myCardFactory.fullSet === 'object', "Test 40 failed");
assert(myCardFactory.fullSet.length === 52, "Test 41 failed");
assert(cardFactory.isCard(myCardFactory.fullSet[0]), "Test 42 failed")
assert(myCardFactory.fullSet[5].name() === card5.name(), "Test 43 failed");
assert(myCardFactory.fullSet[51].name() === card51.name(), "Test 44 failed");

// Test that methods are shared:
assert(card0 !== card3, "Test 50 failed"); //first prove different cards
assert(card0.rank === card3.rank, "Test 51 failed");
assert(card0.suit === card3.suit, "Test 52 failed");
assert(card0.name === card3.name, "Test 53 failed");
//etc...



