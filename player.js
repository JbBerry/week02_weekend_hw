class Player {
  constructor (name){
    this.name = name;
    // way to idendify the players
    this.deck = [];
    // contains cards dealt out by the game
  };

  selectCatagory(choice){
// alloes the active player to make their choice using a variety of inputs
    switch (choice.toLowerCase()) {
      case `agility`:
      case `agi`:
      case `a`:
      case `1`:
        return `agility`;
        break;
        case `intelligence`:
      case `int`:
      case `i`:
      case `2`:
        return `intelligence`;
        break;
        case `strength`:
      case `str`:
      case `s`:
      case `3`:
        return `strength`;
        break;
      case `quit`:
      case `exit`:
        return `quit`;
        break;
      default:
        return null;
        break;
    };
  };
}

module.exports = Player;
