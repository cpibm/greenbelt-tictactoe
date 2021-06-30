const { Board } = require('./board');
const { PlayerO } = require('./playerO');
const { PlayerX } = require('./playerX');

class Replay {
  constructor() {
    this.board = new Board();
    this.movements = [];
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

  loadGame(movements) {
    this.movements = this.mapMovementsToPlayers(movements);
  }

  execute() {
    const playerX = new PlayerX();
    const playerO = new PlayerO();

    this.board.drawPin(playerX, 'top-left');
    this.board.drawPin(playerO, 'top-center');
    this.board.drawPin(playerX, 'mid-left');
    this.board.drawPin(playerO, 'mid-center');
    this.board.drawPin(playerX, 'bottom-right');
    this.board.drawPin(playerO, 'bottom-center');
  }
}

module.exports = {
  Replay,
};
