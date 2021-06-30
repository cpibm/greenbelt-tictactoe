const { Board } = require('./board');
const { PlayerO } = require('./playerO');
const { PlayerX } = require('./playerX');

class Replay {
  constructor() {
    this.board = new Board();
  }

  mapMovementsToPlayers() {
    return [
      { player: new PlayerX(), position: 'top-left' },
      { player: new PlayerO(), position: 'top-center' },
    ];
  }
}

module.exports = {
  Replay,
};
