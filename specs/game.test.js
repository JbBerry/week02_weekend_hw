const Card = require('../card');
const Player = require('../player');
const Game = require('../game');

describe('Top Trumps', () => {
  let topTrumps;
  let player1;
  let plyayer2;
  let players;
  let superman;
  let scarletWitch;
  let blackWidow;
  let theFlash;
  let wonderWoman;
  let batman;
  let startingDeck

  beforeEach(() => {
    superman = new Card(`Superman`,5,10,7);
    scarletWitch = new Card(`Scarlet Witch`,10,5,7);
    blackWidow = new Card(`Black Widow`,5,5,5);
    theFlash = new Card(`The Flash`,5,5,5);
    wonderWoman = new Card(`Wonder Woman`,5,10,5);
    batman = new Card(`Batman`,5,5,5);
    startingDeck = [superman, scarletWitch, blackWidow, theFlash, wonderWoman, batman];

    player1 = new Player(`Player one`);
    player2 = new Player(`Player two`);
    players = [player1,player2];

    topTrumps = new Game(players, startingDeck);
  });

  test('A game should have some players', () => {
    expect(topTrumps.players).toEqual([player1,player2]);
  });

  test('A should start with a deck of cards', () => {
    expect(topTrumps.startingDeck.length).toBe(6);
  });

  test('Player 1 should go first', () => {
    expect(topTrumps.activePlayer).toBe(player1);
  });

  test('be able to deal out a deck of cards evenly', () => {
    topTrumps.dealCards()
    expect(player1.deck.length).toBe(3);
    expect(player2.deck.length).toBe(3);
  });

  test('can determine the best card based on a catagory', () => {
    topTrumps.dealCards();
    expect(topTrumps.chooseBestCard('strength')).toBe(player1);
    expect(topTrumps.chooseBestCard('intelligence')).toBe(player2);
    expect(topTrumps.chooseBestCard('agility')).toBe(player1);

  });

  test('can determine who won the turn', () => {
    topTrumps.setTurnWinner(player2)
    expect(topTrumps.activePlayer).toEqual(player2);
    expect(topTrumps.nonActivePlayer).toEqual(player1);
  });

  test('the game can put the top cards to the bottom of a players deck', () => {
    topTrumps.dealCards();
    topTrumps.cardsToBottomOfDeck(player1,player2)
    expect(player1.deck.length).toBe(4);
    expect(player2.deck.length).toBe(2);
  });

  test('the game can choose a final winner', () => {
    topTrumps.dealCards();
    topTrumps.cardsToBottomOfDeck(player1,player2)
    topTrumps.cardsToBottomOfDeck(player1,player2)
    topTrumps.cardsToBottomOfDeck(player1,player2)
    expect(topTrumps.chooseGameWinner()).toBe(player1);
  });

  test('the game can take a choice, determine the winner, pass the cards to the winner and then determine if there is a winner', () => {
    topTrumps.dealCards();
    topTrumps.cardsToBottomOfDeck(player1,player2)
    topTrumps.cardsToBottomOfDeck(player1,player2)
    topTrumps.takeTurnAction(`strength`)
    expect(topTrumps.chooseGameWinner()).toBe(player1)
  });


});
