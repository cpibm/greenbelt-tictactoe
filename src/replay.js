const { Board } = require('./board');
const { PlayerO } = require('./playerO');
const { PlayerX } = require('./playerX');

class Replay {
  constructor() {
    this.board = new Board();
  }

  mapMovementsToPlayers(movements) {
    const players = {
      O: new PlayerO(),
      X: new PlayerX(),
    };

    return movements.map((m) => ({
      player: players[m.player],
      position: m.position,
    }));
  }
}

module.exports = {
  Replay,
};
