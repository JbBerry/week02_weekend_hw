const Card = require('../card');
const Player = require('../player');
const Game = require('../game');

describe('Top Trumps', () => {
  let superman;

  beforeEach(() => {
    superman = new Card(`Superman`,6,9,7);
  });

  test('A card should have a name', () => {
    expect(superman.name).toBe(`Superman`);
  });
  test('A card should have an intelligence stat', () => {
    expect(superman.intelligence).toBe(6);
  });
  test('A card should have a name', () => {
    expect(superman.strength).toBe(9);
  });
  test('A card should have a name', () => {
    expect(superman.agility).toBe(7);
  });
});
