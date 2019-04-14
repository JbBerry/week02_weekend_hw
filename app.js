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

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


var newTurn = function () {
// shows current player their card
  topTrumps.startOfTurn();
  let choice;
// allows the current player to pick a stat, or leave the game
// does not allow them to make a choice that isn't available
  rl.question(`choose a statistic: `, function (choice) {
    switch(player1.selectCatagory(choice)){
      case `quit`:
        console.log(`exiting game`);
        return rl.close();
        break;
      case `agility`:
      case `intelligence`:
      case `strength`:
// determines who won the turn and passes both cards to the winner
        topTrumps.takeTurnAction(player1.selectCatagory(choice));
        break;
      default:
        console.log(`${choice} is not recognised`);
        break;
    };
// checks if we have a winner by seeing if one player holds all the cards
    if (topTrumps.chooseGameWinner() == null){
      console.log(`====================`);
      newTurn();
    }else{
      console.log(`====================`);
      console.log(`CONGRATULATIONS! ${topTrumps.activePlayer.name.toUpperCase()} HAS WON THE GAME`);
      return rl.close();
    };
  });
};

topTrumps.dealCards()
newTurn(); // starts the first turn of the game
