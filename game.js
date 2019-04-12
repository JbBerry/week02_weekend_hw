class Game {
  constructor (players,startingDeck){
    this.players = players;
    this.turnWinner = players[0];
    this.turnLoser = players[1];
    this.startingDeck = startingDeck;
  };

  dealCards(){
    this.startingDeck.forEach((card,index)=>{
      if (index%2===0){
        this.players[0].deck.push(this.startingDeck[index]);
      }else{
        this.players[1].deck.push(this.startingDeck[index]);
      };
    });
    // const p1 = this.players[0].deck.map((card) =>{
    //   return card.name;
    // });
    // const p2 = this.players[1].deck.map((card) =>{
    //   return card.name;
    // });
    // console.log(`player1 ${p1}`);
    // console.log(`player2 ${p2}`);
  };

  chooseBestCard(choice){
    if (this.turnWinner.deck[0][choice]>=this.turnLoser.deck[0][choice]){
      // console.log(`${this.players[0].name} won this turn`);
      return this.players[0]
    }else if (this.turnWinner.deck[0][choice]<this.turnLoser.deck[0][choice]){
      // console.log(`${this.players[1].name} won this turn`);
      return this.players[1];
    };
  };

  setTurnWinner(player){
    this.turnWinner = player;
    if (player = this.players[0]){
      this.turnLoser = player2;
    }else{
      this.turnLoser = player1;
    };
    // console.log(`${this.turnWinner.name} will make next choice, ${this.turnLoser.name} didn't win`);
  };

  cardsToBottomOfDeck(){
//moves card from the top of a deck to the bottom of the winning deck
  this.turnWinner.deck.push(this.turnWinner.deck.shift());
  this.turnWinner.deck.push(this.turnLoser.deck.shift());
  const p1 = this.players[0].deck.map((card) =>{
    return card.name;
  });
  const p2 = this.players[1].deck.map((card) =>{
    return card.name;
  });
  console.log(`player1 ${p1}`);
  console.log(`player2 ${p2}`);
  };

  chooseGameWinner(){
    let winner = null
    this.players.forEach((player)=>{
      if (player.deck.length === this.startingDeck.length){
        winner = player;
      }
    });
    console.log(`winner ${winner.name}`);
    return winner;
  }

  takeTurnAction(choice){
    this.setTurnWinner(this.chooseBestCard(choice));
    this.cardsToBottomOfDeck();
    return this.chooseGameWinner();

  };

}

module.exports = Game;
