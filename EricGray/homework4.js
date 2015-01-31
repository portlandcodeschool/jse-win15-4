//Make Card

var makeCard = function(id) {

	var newCard = {}; //container for new card!
		newCard.id = id;
		newCard.suits = makeCard.suits;
		newCard.ranks = makeCard.ranks;
		newCard.rank = makeCard.rank;
		newCard.suit = makeCard.suit;
		newCard.color = makeCard.color;
		newCard.cardName = makeCard.cardName;

	return newCard;

};

		makeCard.ranks = {1: "Ace", 2: "Two", 3: "Three", 4: "Four", 5: "Five", 6:"Six",
						7: "Seven", 8: "Eight", 9: "Nine", 10: "Ten", 11: "Jack", 12: "Queen",
						13: "King"};
		/*makeCard.ranks = ["Ace ", "Two ", "Three ", "Four ", "Five ", "Six ", "Seven ", 
						"Eight ", "Nine ", "Ten ", "Jack ", "Queen ", "King "];*/


		makeCard.suits = {1: "Heart", 2: "Diamonds", 3: "Spades", 4: "Clubs"};

		/* makeCard.suits = [" Hearts", " Diamonds", " Spades", " Clubs"]; */

		makeCard.fullSet = []

		makeCard.rank = function(){
						return this.ranks[Math.floor((this.id/4) + 1)];
		};

		makeCard.suit = function(){
						return this.suits[(this.id%4)+1];
		}

		makeCard.color = function(){
						if (this.suit(this.id) == 1 || this.suit(this.id) == 2){
							return "red";
						} else if (this.suit(this.id) == 3 ||  this.suit(this.id) == 4){
							return "black";
						};

					};

		makeCard.cardName = function(){
						var rankID = this.rank();
						var suitID = this.suit();
						var name = rankID  + " of " + suitID;
						return name;
					};

		makeCard.isCard = function(obj){
						if (!obj){
							return false
						} else {
							return true
						}

		};

		makeCard.makeSet = function() {
					for (i = 0; i<52; i++){
					console.log(cardi = makeCard(i));
					makeCard.fullSet.push(cardi);

			}

			return makeCard.fullSet;


		}

//test vars
var card1 = makeCard(1);
var card15 = makeCard(15);
var card43 = makeCard(43);
var card51 = makeCard(51);

// Question 2 Stacking the Deck