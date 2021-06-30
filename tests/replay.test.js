const { Replay } = require('../src/replay');

describe('I can replay a saved game', () => {
  describe('I can replay a vertical victory saved game', () => {
    const replay = new Replay();
    const { board } = replay;
    test('initial grid should be [" "," "," "," "," "," "," "," "," "]', () => {
      expect(board.grid).toStrictEqual([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
    });
  });
});
