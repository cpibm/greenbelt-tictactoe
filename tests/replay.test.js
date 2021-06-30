const { Replay } = require('../src/replay');
const { PlayerO } = require('../src/playerO');
const { PlayerX } = require('../src/playerX');

describe('I can replay a saved game', () => {
  describe('it can load a list of movements', () => {
    const replay = new Replay();

    test('initial grid should be [" "," "," "," "," "," "," "," "," "]', () => {
      const { board } = replay;
      expect(board.grid).toStrictEqual([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
    });

    test('each movement in list is mapped to the correct player object', () => {
      const movements = [
        { player: 'X', position: 'top-left' },
        { player: 'O', position: 'top-center' },
      ];
      const [firstMove, secondMove] = replay.mapMovementsToPlayers(movements);
      expect(firstMove.player).toBeInstanceOf(PlayerX);
      expect(secondMove.player).toBeInstanceOf(PlayerO);
    });

    test('a movement list can be loaded for the replay', () => {
      const movements = [
        { player: 'X', position: 'top-left' },
        { player: 'O', position: 'top-center' },
      ];

      const expectedMovements = [
        { player: new PlayerX(), position: 'top-left' },
        { player: new PlayerO(), position: 'top-center' },
      ];

      replay.loadGame(movements);
      expect(replay.movements).toStrictEqual(expectedMovements);
    });
  });

  describe('I can replay a vertical victory saved game', () => {
    const replay = new Replay();
    const verticalMovements = [
      { player: 'X', position: 'top-left' },
      { player: 'O', position: 'top-center' },
      { player: 'X', position: 'mid-left' },
      { player: 'O', position: 'mid-center' },
      { player: 'X', position: 'bottom-right' },
      { player: 'O', position: 'bottom-center' },
    ];

    test('the final grid should contain ["X","O"," ","X","O"," "," ","O","X"]', () => {
      const { board } = replay;
      replay.loadGame(verticalMovements);
      replay.execute();
      expect(board.grid).toStrictEqual(['X', 'O', ' ', 'X', 'O', ' ', ' ', 'O', 'X']);
    });
  });
});
