// console.log("Up and running!");
// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardTwo);
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne;

cardOne = cards[0];
cardTwo = cards[1];

cardsInPlay.push(cardOne);
console.log("User flipped " + cardsInPlay[0]);


cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay[1]);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay [1]) {
		alert("You found a match!");
	}
		else {
			alert("Sorry, try again")
	}
}