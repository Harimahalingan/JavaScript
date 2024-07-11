// Using a property in a calculation

var player1;
var player2;
player1 = {
	  name: "Max",
	  score: 0
};

console.log(player1.name + " has scored " + player1.score);

player1.score = player1.score + 50;

console.log(player1.name + " has scored " + player1.score);

player1.score = player1.score * 1.1 ;
console.log(player1.name + " has scored " + player1.score);

player2 = {
	name: "alex",
	score: 75
};
console.log(player2.name + " has Scored " + player2.score);
 var totalscore=player1.score + player2.score;
 console.log(player1.name + " and " + player2.name + " hava a combained score of " + totalscore);



/* Further Adventures
 *
 * 1) Write code to increase player1's score by 10%.
 *
 * 2) Add a second player.
 *
 * 3) Use the players' properties to find the sum
 *    of their scores and log it to the console,
 *    along with an appropriate message that includes
 *    their names.
 *
 */