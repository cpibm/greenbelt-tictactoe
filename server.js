const express = require('express');
const { API } = require('./src/api');

const app = express();
const PORT = process.env.PORT || 3000;
const api = new API();
const apiRoot = '/api/tictactoe';
app.use(express.json());

app.get(`${apiRoot}/newgame`, (req, res) => {
  res.json(api.newGame());
});

app.get(`${apiRoot}/botgame/:gameType`, (req, res) => {
  res.json(api.botGame(req.params.gameType));
});

app.listen(PORT, () => {
  console.log(`TicTacToe API listening on port ${PORT}.`);
});
