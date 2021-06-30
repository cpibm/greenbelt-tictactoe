const { Board } = require('./board');
const { PlayerO } = require('./playerO');
const { PlayerX } = require('./playerX');

class Replay {
  constructor() {
    this.board = new Board();
    this.movements = [];
    this.asciiMovements = [];
    this.winner = 'O';
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
    this.movements.forEach((m) => {
      this.board.drawPin(m.player, m.position);
      this.asciiMovements.push(this.board.prepareTheConsoleOutput());
    });
  }
}

module.exports = {
  Replay,
};
