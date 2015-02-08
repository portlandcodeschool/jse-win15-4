//Homework #4

//1
var cardTools = {

	 RANKS : ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"],
	 SUITES : ["Hearts", "Diamonds", "Spades", "Clubs"],

		createCardDeck : function(){
		var cardDeck = [];
			
		for (var i = 0, rankLength = this.RANKS.length; i < rankLength; i++) {
			for (var j = 0, suitLength = this.SUITES.length; j < suitLength; j++){
					cardDeck.push(this.RANKS[i] + " of " + this.SUITES[j]);
				}
		}
		return cardDeck;

	},


	rank : function(id) {
		//rank(id) returns 1-13, representing the card's rank (for an id between 0-51).
		//return RANKS[Math.floor(id/this.SUITES.length)]; this returns rank name 
		if ( id > 51 || id < 0 || typeof id === 'string' || id % 1 !== 0 || id === undefined) {
			return NaN;
		}
		return Math.floor(id/this.SUITES.length) + 1; //return RANKS index number
	},

	suit : function(id) {
		//suit(id) returns 1-4, representing the card's suit (1 is Hearts, 4 is Clubs).
		//return this.SUITES[id % this.SUITES.length]// return suit name
		if ( id > 51 || id < 0 || typeof id === 'boolean' || id % 1 !== 0 || id === undefined) {
			return NaN;
		}
		return id % this.SUITES.length + 1; // returns suit index number
	},

	color: function(id) {
		//color(id) returns "red" or "black"
		//hearts red, diamonds red,
		if (typeof id === 'string' || id === true){
			return NaN;
		}
		var color = cardTools.suit(id);
		if (color > 1) {
			return "black";
		} else {
			return "red";
		}

	},

	name: function (id) {
		if ( id > 51 || id < 0 || typeof id === 'string' || id == false || id % 1 !== 0 || id === undefined) {
			return NaN;
		}
		var cards = this.createCardDeck();
		return cards[id];
	},

	cardID: function(rank, suit) {
		//returns 0-51, identifying the card id of a given rank and suit.
		if (rank > 13 || rank < 1 || typeof rank == 'string' || typeof rank === 'boolean'|| rank % 1 !== 0){
			return NaN;
		} 
		if (suit > 4 || suit % 1 !== 0) {
			return NaN;
		}
		var rankString = this.RANKS[rank-1], suitString = this.SUITES[suit-1];
		return this.SUITES.length * this.RANKS.indexOf(rankString) + this.SUITES.indexOf(suitString);
		}
}
