const { API } = require('../src/api');

describe('API contract tests for the tictactoe game', () => {
  const api = new API();

  test('should return an empty game on /api/tictactoe/newgame', () => {
    const expectedResponse = {
      winner: null,
      board: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      movements: [],
      asciiMovements: [],
      player: 'X',
    };

    expect(api.newGame()).toStrictEqual(expectedResponse);
  });

  test('should return full game with horizontal victory on /api/tictactoe/botgame/horizontal', () => {
    const expectedResponse = {
      winner: 'O',
      board: [' ', 'X', ' ', 'O', 'O', 'O', ' ', 'X', 'X'],
      movements: [
        { player: 'X', position: 'top-center' },
        { player: 'O', position: 'mid-left' },
        { player: 'X', position: 'bottom-center' },
        { player: 'O', position: 'mid-center' },
        { player: 'X', position: 'bottom-right' },
        { player: 'O', position: 'mid-right' },
      ],
      asciiMovements: [
        ' |X| \n-+-+-\n | | \n-+-+-\n | | ',
        ' |X| \n-+-+-\nO| | \n-+-+-\n | | ',
        ' |X| \n-+-+-\nO| | \n-+-+-\n |X| ',
        ' |X| \n-+-+-\nO|O| \n-+-+-\n |X| ',
        ' |X| \n-+-+-\nO|O| \n-+-+-\n |X|X',
        ' |X| \n-+-+-\nO|O|O\n-+-+-\n |X|X',
      ],
    };

    expect(api.botGame('horizontal')).toStrictEqual(expectedResponse);
  });

  test('should return full game with vertical victory on /api/tictactoe/botgame/vertical', () => {
    const expectedResponse = {
      winner: 'O',
      board: ['X', 'O', ' ', 'X', 'O', ' ', ' ', 'O', 'X'],
      movements: [
        { player: 'X', position: 'top-left' },
        { player: 'O', position: 'top-center' },
        { player: 'X', position: 'mid-left' },
        { player: 'O', position: 'mid-center' },
        { player: 'X', position: 'bottom-right' },
        { player: 'O', position: 'bottom-center' },
      ],
      asciiMovements: [
        'X| | \n-+-+-\n | | \n-+-+-\n | | ',
        'X|O| \n-+-+-\n | | \n-+-+-\n | | ',
        'X|O| \n-+-+-\nX| | \n-+-+-\n | | ',
        'X|O| \n-+-+-\nX|O| \n-+-+-\n | | ',
        'X|O| \n-+-+-\nX|O| \n-+-+-\n | |X',
        'X|O| \n-+-+-\nX|O| \n-+-+-\n |O|X',
      ],
    };

    expect(api.botGame('vertical')).toStrictEqual(expectedResponse);
  });
});
