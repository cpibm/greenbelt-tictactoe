const inquirer = require('inquirer');
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
