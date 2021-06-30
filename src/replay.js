const { Board } = require('./board');

class Replay {
  constructor() {
    this.board = new Board();
  }
}

module.exports = {
  Replay,
};
