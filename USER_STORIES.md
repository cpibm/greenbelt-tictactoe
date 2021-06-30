# Goal
The graduation for the green belt requires to get back your TicTacToe Kata(the one you developed for the yellow belt graduation), refactor it, and extending it with an API wrapper strictly adhering to an ATDD-BDD/TDD double loop cycle. The showcase must be performed on a Q/A environment after having successfully being tested it into a CI environment.

## US1: BOT - print on the screen all the moves until we got a victory or draw.
- ✅ create a command that prints all the moves without delay in the console until a victory or draw
- ✅ must run in bot mode


## US2: API - print on the screen all the moves until we got a victory or draw.
- receive a JSON from the TicTacToe API that contains all the moves of a game in BOT mode and the final state of the game
- must run in bot mode
- Given a TicTacToe API, whena newgame is requested via `/api/TicTacToe/newGame`, then is provided to the requester a JSON with a game played in BOT mode