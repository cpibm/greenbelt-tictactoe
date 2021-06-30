const { Replay } = require('../src/replay');
const { PlayerO } = require('../src/playerO');
const { PlayerX } = require('../src/playerX');

describe('I can replay a saved game', () => {
  describe('it can load a list of movements', () => {
    const replay = new Replay();

    test('each movement in list is mapped to the correct player object', () => {
      const movements = [
        { player: 'X', position: 'top-left' },
        { player: 'O', position: 'top-center' },
      ];
      const [firstMove, secondMove] = replay.mapMovementsToPlayers(movements);
      expect(firstMove.player).toBeInstanceOf(PlayerX);
      expect(secondMove.player).toBeInstanceOf(PlayerO);
    });
  });

  describe('I can replay a vertical victory saved game', () => {
    const replay = new Replay();
    const { board } = replay;
    test('initial grid should be [" "," "," "," "," "," "," "," "," "]', () => {
      expect(board.grid).toStrictEqual([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
    });
  });
});
