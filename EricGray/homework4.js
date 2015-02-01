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
		newCard.convertRank = makeCard.convertRank;
		newCard.convertSuit = makeCard.convertSuit;

	return newCard;

};
		
		makeCard.ranks = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", 
						"Eight", "Nine", "Ten", "Jack", "Queen", "King"];

		 makeCard.suits = ["Hearts", "Diamonds", "Spades", "Clubs"];

		makeCard.fullSet = []

		makeCard.rank = function(){
						return Math.floor((this.id/4) + 1)
		};

		makeCard.suit = function(){
						return (this.id%4)+1;
		}

		makeCard.color = function(){
						if (this.suit(this.id) == 1 || this.suit(this.id) == 2){
							return "red";
						} else if (this.suit(this.id) == 3 ||  this.suit(this.id) == 4){
							return "black";
						};

					};

		makeCard.cardName = function(){
						var rankID = this.rank()-1;
						var suitID = this.suit()-1;
						var name = this.ranks[rankID]  + " of " + this.suits[suitID];
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

					card = makeCard(i);
					makeCard.fullSet.push(card);

					/*console.log(cardi = makeCard(i));
					makeCard.fullSet.push(cardi); */

			}

			return makeCard.fullSet;


		}

//test vars
var card1 = makeCard(1);
var card15 = makeCard(15);
var card43 = makeCard(43);
var card51 = makeCard(51);


//Compare Functions

function compare(a, b) {
	if (a.suit() === b.suit()) {
		 		function compare(a,b) {
			if (a.rank() > b.rank()) {
				return -1;
			} else {
				return 1;
			}
		} return 0 }else if (a.suit() > b.suit()) {
			return -1;
		} else {
			return 1;
		}
	}



