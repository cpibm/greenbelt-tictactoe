const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const apiRoot = '/api/tictactoe';
app.use(express.json());

app.get(`${apiRoot}/newgame`, (req, res) => {
  res.json({
    appName: process.env.npm_package_name,
    appVersion: process.env.npm_package_version,
  });
});

app.listen(PORT, () => {
  console.log(`TicTacToe API listening on port ${PORT}.`);
});
