const inquirer = require('inquirer');
const { Replay } = require('./src/replay');
const { gameTypes } = require('./src/sampleGames');

function printReplay(asciiMovements) {
  asciiMovements.forEach((move) => {
    console.log(`\n${move}`);
  });
}

function printWinner(winner) {
  if (winner === 'draw') {
    console.log('\nGAME FINISHED IN DRAW');
  } else {
    console.log('\nGAME WINNER: Player', winner);
  }
}

function runReplay(gameType) {
  const movements = gameTypes[gameType];
  const replay = new Replay();
  replay.loadGame(movements);
  replay.execute();
  printReplay(replay.asciiMovements);
  printWinner(replay.winner);
}

inquirer
  .prompt([
    {
      type: 'rawlist',
      name: 'gameType',
      message: 'Choose tic-tac-toe bot game to see:',
      choices: ['horizontal', 'vertical', 'diagonal', 'draw'],
    },
  ])
  .then((answers) => {
    runReplay(answers.gameType);
  });
