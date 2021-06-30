const { Replay } = require('./replay');
const { gameTypes } = require('./sampleGames');

class API {
  newGame() {
    const replay = new Replay();
    return {
      winner: replay.winner,
      board: replay.board.grid,
      movements: replay.movements,
      asciiMovements: replay.asciiMovements,
      player: 'X',
    };
  }

  botGame(gameType) {
    const movements = gameTypes[gameType];
    const replay = new Replay();
    replay.loadGame(movements);
    replay.execute();

    return {
      winner: replay.winner,
      board: replay.board.grid,
      movements: this.simplifyPlayersFrom(replay.movements),
      asciiMovements: replay.asciiMovements,
    };
  }

  simplifyPlayersFrom(movements) {
    return movements.map((m) => ({
      player: m.player.pin,
      position: m.position,
    }));
  }
}

module.exports = { API };
