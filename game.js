class Game {
  constructor (players,startingDeck){
    this.players = players; // array of game players
    this.activePlayer = players[0]; // 1st player goes first
    this.nonActivePlayer = players[1];
    this.startingDeck = startingDeck; // holds the dek before sharing to the players
  };

  dealCards(){
    this.startingDeck.forEach((card,index)=>{
      if (index%2===0){
        this.players[0].deck.push(this.startingDeck[index]);
      }else{
        this.players[1].deck.push(this.startingDeck[index]);
      };
    });
  };

  startOfTurn(){
    console.log(`${this.activePlayer.name} your card is:`); console.log(`Name: ${this.activePlayer.deck[0].name}`); console.log(`Agility: ${this.activePlayer.deck[0].agility}`);
    console.log(`Intelligence: ${this.activePlayer.deck[0].intelligence}`);
    console.log(`Strength: ${this.activePlayer.deck[0].strength}`);
  };

  chooseBestCard(choice){
/* could be written
this.players.forEach(player,index,array)=>{
if player.deck[0][choice]> ?allOtherPlayers?.deck[0][choice]
return player });
*/
    if (this.activePlayer.deck[0][choice]>=this.nonActivePlayer.deck[0][choice]){
      return this.activePlayer;
    }else{
      return this.nonActivePlayer;
    };
  };

  setTurnWinner(player){
    this.activePlayer = player;
    if (player == this.players[0]){
      this.nonActivePlayer = this.players[1];
    }else{
      this.nonActivePlayer = this.players[0];
    };
  };

  cardsToBottomOfDeck(){
  this.activePlayer.deck.push(this.activePlayer.deck.shift());
  this.activePlayer.deck.push(this.nonActivePlayer.deck.shift());
  };

  takeTurnAction(choice){
    this.setTurnWinner(this.chooseBestCard(choice));
    console.log(`${this.activePlayer.name} won this round`);
    console.log(`${this.activePlayer.deck[0].name} with ${choice} of ${this.activePlayer.deck[0][choice]} beat ${this.nonActivePlayer.deck[0].name} with ${choice} of ${this.nonActivePlayer.deck[0][choice]}`);
    this.cardsToBottomOfDeck();
  };

  chooseGameWinner(){
    let winner = null
    this.players.forEach((player)=>{
      if (player.deck.length === this.startingDeck.length){
        winner = player.name;
        return winner;
      };
    });
  return winner;
  };
}

module.exports = Game;
