function makeCard(id) {
    // If id is invalid (out of range, etc)

  if ((typeof id) !='number' || (id%1 !== 0) || (id < 0 || id > 51)) {

   return null;
}
  var card = {
  	id:id,
    rank : makeCard.rank,
    suit : makeCard.suit,
    color : makeCard.color,
    name : makeCard.cardName
	}
    // Otherwise build an instance object with an id property,
    // representing one card, and attach to it four methods:
    //card.rank() = rank;
    //   suit()
    //   color()
    //   name()
    // Each method property should be just a link to the corresponding method
    //  of the factory itself.

    return card // /* that instance here ;
} // end makeCard

//-----------------------------
// Methods called though instances (where 'this' means the instance):
//-----------------------------

makeCard.rank = function() { // --> 1..13, NaN
     // console.log(this.id)
	    return Math.floor((this.id/4)+1);
};

makeCard.suit = function() { // --> 1..4, NaN
    //error=errorcheck(id,0,51)
      suitnum = (this.id%4)+1;
	    return suitnum;
};
   
makeCard.color = function() { // -->"red,"black",NaN
 // console.log(this.suit(this.id))
    if(this.suit(this.id) < 3) {
      colorname = "red";
    } else {
      colorname = 'black';
    }
    return colorname;
    
};

makeCard.cardName = function() { //--> string, NaN
    // This method can't have the key 'name' within the makeCard function,
    // but instance objects can store a reference to it called 'name'

    // array & variable assignments and declarations
	  var cRank = ['Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King'];
    var cSuit = ['Hearts','Diamonds','Spades','Clubs'];
	  var suitname = cSuit[this.suit(this.id) - 1];
	  var nameid = cRank[this.rank(this.id)-1] + " of " + suitname;
	  return nameid;
};


//-----------------------
// Methods to be called through factory only:
//-----------------------

makeCard.isCard = function(thing) { // --> true,false
    // return true if thing is a valid card instance made by this factory
 if (thing.name == makeCard.cardName) {
  return thing;
  }
}

//---------------------
// Additional factory properties
//---------------------

makeCard.fullSet = [];//<-- instead, generate array of 52 card instances
for (var i=0; i<52; i++) {
  makeCard.fullSet.push(makeCard(i));
}

  
//makeCard.isCard(makeCard.fullSet[0])
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

console.log("assertions 1-6, 10-13 passed");

// Test makeCard.isCard:
assert(makeCard.isCard(card0),  "Test 21 failed")
assert(makeCard.isCard(card51), "Test 22 failed")
assert(!makeCard.isCard(0),    "Test 23 failed")
assert(!makeCard.isCard({}),   "Test 24 failed")

console.log("assertions 21-24 passed");

// Test failed card-making results:
assert(!makeCard(52),"Test 26 failed");
assert(!makeCard("0"),"Test 27 failed");
assert(!makeCard(-1),"Test 28 failed");
assert(!makeCard(false),"Test 30 failed");
assert(!makeCard(true),"Test 31 failed");

console.log("assertions 26-28, 30, 31 passed");

// Test fullSet array:
assert(typeof makeCard.fullSet === 'object', "Test 40 failed");
assert(makeCard.fullSet.length === 52, "Test 41 failed");
assert(makeCard.isCard(makeCard.fullSet[0]), "Test 42 failed") // 
assert(makeCard.fullSet[5].name() === card5.name(), "Test 43 failed");
assert(makeCard.fullSet[51].name() === card51.name(), "Test 44 failed");

console.log("assertions 40-44 passed - this includes questions 1b & 1c");
// Test that methods are shared:
assert(card0 !== card3, "Test 50 failed"); //first prove different cards
assert(card0.rank === card3.rank, "Test 51 failed");
assert(card0.suit === card3.suit, "Test 52 failed");
assert(card0.name === card3.name, "Test 53 failed");

console.log("assertions 50-53 passed");

console.log('1d completed instructions per homework description')

// The factory itself:

function makeDeque(values) {
  var deque = {
    //array : makeCard.fullSet.slice(0),
    array : values.slice(0),
    length : makeDeque.arrlength,	//return the number of items currently in the deque.  
					//Notice that this can be used to _get_ the deque's length 
					//but not to _change_ it.
    top: makeDeque.top,			//return the element on top of the deque (or undefined if none).
    bottom: makeDeque.bottom,		//return the element on bottom of the deque (undefined if none).
    pop : makeDeque.pop, 		//remove and return the top element (undefined if none).
    push : makeDeque.push,  		//add an element to the top and return the new deque length.
    shift: makeDeque.shift,	//remove and return the bottom element.
    unshift : makeDeque.unshift,	//add an element to the bottom and return the new length.
    cut: makeDeque.cut,		//split the deque at the middle, then swap the two halves.  
					//If there are an odd number of deque elements, split just 
					//above the middle element.  The element just below the split 
					//will become the new top element when the halves are swapped.  
					//If the deque contains fewer than 2 items, it will remain 
					//unchanged.

    sort : makeDeque.sort, 	//reorder the elements of the deque according to the comparison defined by the function _compareValsFn_, passed as an argument to _sort_.
    compareValsFn : makeDeque.compareValsFn,		//should return a positive number whenever value _a_  belongs somewhere above value _b_ in the sorted result, and a negative number whenever _a_ belongs below _b_.  (Zero means they're equivalent: either may come first.)
    map : makeDeque.map 		//return an array whose elements have been generated by calling `convertValFn(val)` on each _val_ in the deque.

	} //end of deque
	 return deque//an instance object
}

// The factory's instance methods:
makeDeque.arrlength = function() {
	//console.log(this.array.length)
  return this.array.length;
}

makeDeque.top = function() {
	return this.array[(this.array.length)-1];
  
  
}

makeDeque.bottom = function() {
  return this.array[0];
}

makeDeque.pop = function() {
  return this.array.pop();
         //this.array.length;
}

makeDeque.push = function(val) {
  return this.array.push(val);
	
}

makeDeque.shift = function() {
	this.array.shift()
  return this.array.length;
}

makeDeque.unshift = function(val) {
	return this.array.shift(val);
}

makeDeque.cut = function() {
  if (mid =(Math.ceil((this.array.length)/2)) == 0) {
    return this.array; }
    //var test = this.array.splice(mid,0)
    //return test
}

makeDeque.map = function(convertValFn) {
	//...
}

makeDeque.sort = function(compareValsFn) {
	//...
}

//var deque0 = makeDeque(makeCard.fullSet);
var deque0 = makeDeque([1,2]);
// Feel free to write tests for your code!

//deque0.top();
//deque0.length();
//deque0.bottom();
deque0.cut()
//deque0.pop();
//deque0.push(2)
//deque0.shift();
//deque0.unshift(2);