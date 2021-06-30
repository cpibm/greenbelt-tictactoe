const { Board } = require('./board');
const { PlayerO } = require('./playerO');
const { PlayerX } = require('./playerX');

class Replay {
  constructor() {
    this.board = new Board();
    this.movements = [];
    this.asciiMovements = [];
    this.winner = null;
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

  setWinner(player) {
    if (this.board.checkForWin(player)) {
      this.winner = player.pin;
    }

    const hasGameFinished = this.asciiMovements.length === 9;
    const noPlayerWon = this.winner === null;
    if (hasGameFinished && noPlayerWon) {
      this.winner = 'draw';
    }
  }

  execute() {
    this.movements.forEach((m) => {
      this.board.drawPin(m.player, m.position);
      this.asciiMovements.push(this.board.prepareTheConsoleOutput());
      this.setWinner(m.player);
    });
  }
}

module.exports = {
  Replay,
};
