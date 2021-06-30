class API {
  newGame() {
    return {
      winner: null,
      board: [],
      movements: [],
      asciiMovements: [],
      player: 'X',
    };
  }

  botGame() {
    return {
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
  }
}

module.exports = { API };
