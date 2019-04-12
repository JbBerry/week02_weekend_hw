const Card = require('../card');
const Player = require('../player');
const Game = require('../game');

describe('Top Trumps', () => {
  let player1;

  let superman;
  let scarletWitch;


  beforeEach(() => {
    superman = new Card(`Superman`,6,9,7);
    scarletWitch = new Card(`Scarlet Witch`,7,10,5);

    player1 = new Player(`Player 1`);
  });

  test('A player should have a name', () => {
    expect(player1.name).toBe(`Player 1`);
  });

  test('A player should start with no cards', () => {
    expect(player1.deck.length).toBe(0);
  });

  test('A player should be able to have cards', () => {
    player1.deck.push(superman)
    player1.deck.push(scarletWitch)
    expect(player1.deck.length).toBe(2);
    expect(player1.deck).toEqual([superman,scarletWitch]);
  });

  test('A player should be able to pick a catagory', () => {
    expect(player1.selectCatagory(`strength`)).toBe(`strength`)
    expect(player1.selectCatagory(`intelligence`)).toEqual(`intelligence`)
    expect(player1.selectCatagory(`agility`)).toEqual(`agility`)
    expect(player1.selectCatagory(`something else`)).toEqual(undefined)
  });
});
