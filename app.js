const Card = require('./card');
const Player = require('./player');
const Game = require('./game');
const readline = require('readline');

let superman = new Card(`Superman`,6,9,7);
let scarletWitch = new Card(`Scarlet Witch`,7,10,5);
let blackWidow = new Card(`Black Widow`,8,6,9);
let theFlash = new Card(`The Flash`,7,4,10);
let wonderWoman = new Card(`Wonder Woman`,8,7,5);
let batman = new Card(`Batman`,10,7,5);
let startingDeck = [superman, scarletWitch, blackWidow, theFlash, wonderWoman, batman];

let player1 = new Player(`Player one`);
let player2 = new Player(`Player two`);
let players = [player1,player2];

let topTrumps = new Game(players, startingDeck);

let choice;

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

topTrumps.dealCards()
var newTurn = function () {
  topTrumps.startOfTurn();
  rl.question('chose a statistic: ', function (choice) {
    topTrumps.takeTurnAction(choice);
    if (topTrumps.chooseGameWinner() != null){
      console.log(`CONGRATULATIONS! ${topTrumps.activePlayer.name} has won the game`);
      return rl.close(); //closing RL and returning from function.
    }else{
      console.log(`next turn`);
      newTurn(); //Calling this function again to ask new question
    };
  });
};

newTurn(); //we have to actually start our recursion somehow
