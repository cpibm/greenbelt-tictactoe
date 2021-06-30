const { API } = require('../src/api');

describe('API contract tests for the tictactoe game', () => {
  const api = new API();

  test('should return an empty game on /api/tictactoe/newgame', () => {
    const expectedResponse = {
      winner: null,
      board: [],
      movements: [],
      asciiMovements: [],
      player: 'X',
    };

    expect(api.newGame()).toStrictEqual(expectedResponse);
  });
});
