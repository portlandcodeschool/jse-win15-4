/*
1) A Card Factory [25%] Revisit your playing card functions from homework 3 and repackage them 
in a Factory pattern. You will replace the earlier cardTools toolkit object with a function 
makeCard(id) (the Factory) which, with each call, makes and returns an object (an Instance)
representing a single card. If id is invalid (not an integer 0..51), the factory should instead 
return null. Each valid card object stores its own id and has four instance methods to calculate
its other attributes:

    card.rank() returns 1..13 representing that card's rank.
    card.suit() returns 1..4 representing that card's suit.
    card.color() returns a string representing that card's color.
    card.name() returns a string representing that card's name. Note that although this function 
    can be attached to the card instance as a property called 'name', it needs a different name
    (e.g. 'cardName') when attached to the factory, which is a function and already defines a
    property 'name' for another purpose.

Avoid redundant copies of the instance methods: instead of defining new methods for each card
instance, link them all to a shared copy of each method which stored in the factory itself.
Here is a template file. If you need helper functions (e.g. for validating arguments), you may
attach them as additional factory methods.

*/

/* Explanation -- 
This solution starts w/ 2 objects: Order and Suit - which are used to create the deck object. 
Then the deck object is used to build the cards & their methods.  It should run then makeCard() 
and makeCard.isCard() and fullSet() with-out having to call newDeck.
Sorry if not right- seemed easier/more complete at the time.
*/

var Order = {Ace: 0, 2:4, 3:8, 4:12, 5:16, 6:20, 7:24, 8:28, 9:32, 10:36, Jack:40, Queen:44, King:48}
var Suit = {Hearts:1, Diamonds:2, Spades:3, Clubs:4};
         
    var name;
    var score;
    var pDeck = [];
    var Deck = [];

var createDeck = function() {

    count = 0;
    for(var i in Order) {     //loop through Order object
    name = i;                 //add Order names to name var 
    score = Order[i];         //add Order scores to score var
     for(var b in Suit) {     //take each Order property and loop through the Suits 
        
         name2 = name;         //set new variable for initial name/ re-set when loop returns
        name2 += " of " + b;  //add Suit name to name2 var
        score2 = score;      //set new variable for initial score/re-set when loop returns
        score2+= Suit[b];    //add Suit score to score2 var
         
         pDeck[count]= name2;  //add score2 to the Deck properties - the Deck will be undefined w/out
                               //this (why???)
         count++;
    }
    }
    //The Array puts the Aces in indexes 36-39, so the following moves them to indexes 0-4
    var c = pDeck.slice(36,40);           
    var rDeck= pDeck.slice(0,36).concat(pDeck.slice(40));
    Deck = c.concat(rDeck); 
    
    return Deck;           //returns Deck object/array
}

var newDeck = createDeck();  //creats a new deck/runs the above - only needs to be done once

var makeCard = function (id) {
   
  
    if (!(Number.isInteger(id)))
        return null;
  //else 

  
  var card = {
    /*  ?? not understanding line 6 of framework - does he mean to do the below - commented out
    line?
    id: [rank(id), rankSuit(id), color(id), nameCard(id)];
    */
    rank: rank(id),
    rankSuit: rankSuit(id),
    color: color(id),
    nameCard: nameCard(id),  
    //cardID: cardID(id) //this is for my version only 
    };


var y;
  
    function rank (){
       if (id===0);
           return 1;
        y = Math.ceil(id/4);
        return y;
        };

    function rankSuit (){
      id=Number(id);
        y= id+1;
        if (y<5)
            return y;
        else if (y %4===0)
            return 4;
        return y %4;       
    };


    function color () {
        shade = rankSuit(id);  //callback to previous function
        if (shade <3) {
            return "red";
        };
        return "black";
    };

    function nameCard () {
        //g = createDeck();      // no need to include if already created
        name = Deck[id];         
        return name;
        };
 return card;
}   
var newCards = makeCard;
 /* 
 below would need to be modified to work w/in makeCard factory (e.g. convert id to rank & suit 
 strings)
 
 function cardID (rank1, suit) {
        //Deck[id]
        //b= makeCard.rank(rank1);
        //c= makeCard.rankSuit(suit);
        //return ((b-1)*4)+c;    
   return (((rank-1)*4)+suit)-1;    
    };    
*/ 
  
//4.1.b Final - not sure if this is correct -
// b) Write another method which is attached to and called through the factory alone, not the
//instances:  makeCard.isCard(obj) should return true if obj is a valid card object 
//(a product of the factory) and false otherwise.

makeCard.isCard = function (obj) {  //makeCard.isCard = function (obj) is not being accepted??
   //var testArr = Object.keys(obj);
   //var knownArr = Object.keys(makeCard(0));
   
   //if (testArr.sort() !== knownArr.sort())
     //return false;
     
   //for (b in obj){
    if (Number.isInteger(obj) && Number(obj)<53) {
    for (var i=0; i<53; i++){
     if (makeCard[i] == makeCard[obj])        
     //    if (obj[b] !== makeCard[b])
           return true;
        }
    }
        return false;
   }
/*
//trial 2 describe an object & compare to makeCard() - use result to determine validity
// this is not working - how to check if the keys are equivalent? i by i
//-------------------------------------------------------------------------------------------------
makeCard.isCard = function (obj) {
   
    if (typeof(obj)=="object" ){
    for (var i in obj) {
        if (obj[i]==makeCard[i])
        //for (var b in makeCard(obj)) {
        //    if (i==b &&   obj[i]==makeCard[b]);
        //for (b in makeCard(0)) {
//      if    
        
       return true;
    }

    //&&
    //(Object.valueof(Object.keys(obj)) == Object.valueof((arr)))
    //return true;
    //else
        return false;
    }
}
*/
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
 
//c) Use the factory to generate an array of 52 card instances (one for each id), and store the 
//array as a property of the factory called fullSet:
 
 var fullSet = function() { ////makeCard.fullSEt = function () is not being accepted??
   var arrFullSet = []; 
 
   for (var i=0; i<53; i++){
     arrFullSet[i] = makeCard(i); 
 }
   return arrFullSet;
 }

 /*
 d) Edit the file main.html to ensure that its first <script...src=...> tag includes the 
 correct filename for your card-factory code, then open main.html in a browser. Using the 
 console, call your factory to generate and test a few card instances. In Problem 2b), you'll 
 combine the card-factory module with a "deque" module.
 */

 