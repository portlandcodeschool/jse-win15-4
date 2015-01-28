//Make Card

var makeCard = function(id) {

	var newCard = {}; //container for new card!
		newCard.id = id;
		newCard.ranks = ["Ace ", "Two ", "Three ", "Four ", "Five ", "Six ", "Seven ", 
"Eight ", "Nine ", "Ten ", "Jack ", "Queen ", "King "];
		newCard.suits = [" Hearts", " Diamonds", " Spades", " Clubs"];


		newCard.rank = function(){
			//var r = id / 4;
			return Math.floor((this.id/4) + 1);

		};

		newCard.suit = function(){
				return (this.id%4)+1;
		}

		newCard.color = function(){
			if (this.suit(this.id) == 1 || this.suit(this.id) == 2){
				return "red";
			} else if (this.suit(this.id) == 3 ||  this.suit(this.id) == 4){
				return "black";
			};

		};

		newCard.cardName = function(){
			var rankID = this.rank(this.id) - 1;
			var suitID = this.suit(this.id) - 1;
			var name = this.ranks[rankID] + "of" + this.suits[suitID];
			return name;
		};


	return newCard;

};

//test vars
var card1 = makeCard(1);
var card15 = makeCard(15);
var card43 = makeCard(43);
var card51 = makeCard(51);

//Factory Work

