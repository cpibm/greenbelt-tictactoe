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
}

module.exports = { API };
