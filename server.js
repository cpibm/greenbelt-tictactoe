const express = require('express');
const { Replay } = require('./src/replay');

const gameTypes = {
  horizontal: [
    { player: 'X', position: 'top-center' },
    { player: 'O', position: 'mid-left' },
    { player: 'X', position: 'bottom-center' },
    { player: 'O', position: 'mid-center' },
    { player: 'X', position: 'bottom-right' },
    { player: 'O', position: 'mid-right' },
  ],
  diagonal: [
    { player: 'X', position: 'top-left' },
    { player: 'O', position: 'top-center' },
    { player: 'X', position: 'mid-center' },
    { player: 'O', position: 'mid-left' },
    { player: 'X', position: 'bottom-right' },
  ],
  vertical: [
    { player: 'X', position: 'top-left' },
    { player: 'O', position: 'top-center' },
    { player: 'X', position: 'mid-left' },
    { player: 'O', position: 'mid-center' },
    { player: 'X', position: 'bottom-right' },
    { player: 'O', position: 'bottom-center' },
  ],
  draw: [
    { player: 'X', position: 'bottom-left' },
    { player: 'O', position: 'top-center' },
    { player: 'X', position: 'mid-center' },
    { player: 'O', position: 'top-right' },
    { player: 'X', position: 'top-left' },
    { player: 'O', position: 'mid-left' },
    { player: 'X', position: 'mid-right' },
    { player: 'O', position: 'bottom-right' },
    { player: 'X', position: 'bottom-center' },
  ],
};

const app = express();
const PORT = process.env.PORT || 3000;
const apiRoot = '/api/tictactoe';
app.use(express.json());

app.get(`${apiRoot}/newgame`, (req, res) => {
  const replay = new Replay();
  res.json({
    winner: replay.winner,
    board: replay.board.grid,
    movements: replay.movements,
    asciiMovements: replay.asciiMovements,
    player: 'X',
  });
});

app.get(`${apiRoot}/botgame/:gameType`, (req, res) => {
  const movements = gameTypes[req.params.gameType];
  const replay = new Replay();
  replay.loadGame(movements);
  replay.execute();

  res.json({
    winner: replay.winner,
    board: replay.board.grid,
    movements: replay.movements,
    asciiMovements: replay.asciiMovements,
  });
});

app.listen(PORT, () => {
  console.log(`TicTacToe API listening on port ${PORT}.`);
});
