class Player {
  constructor (name){
    this.name = name;
    // way to idendify the players
    this.deck = [];
    // contains cards dealt out by the game
  };

  selectCatagory(choice){
    if (choice == `intelligence` || choice == `strength` || choice == `agility`){
      return choice;
    };
    return null;
//player selects intelligence, strength or agility.
  };
}

module.exports = Player;
