// The TicTacGame factory function creates objects that provide
// game logic around the GameBoard module. It takes two Player objects
// as parameters and actively uses their methods to make moves

const TicTacGame = function(playerX, player0) {
  let currentPlayer = playerX;

  // The gameState object holds info about current game state. Possible status
  // values are "continue", "over" or "draw". This object can be changed
  // only via changeState function which is called after each move() call

  const gameState = {
    status: "continue", // or "over", "draw"
    movesCount: 0,
    winnerSymbol: null,
    winnerLine: null
  }

  // Read-only access to gameState object for outside usage

  const status = () => gameState.status;
  const winnerSymbol = () => gameState.winnerSymbol;
  const winnerLine = () => gameState.winnerLine;

  // Switch players (this function is used only inside move() function)

  const nextPlayer = function() {
    currentPlayer = (currentPlayer === playerX) ? player0 : playerX;
  }

  // Waits for current player to input move and changes the state of game

  const move = function(coords) {
    if (Gameboard.isEmpty(coords)) {
      Gameboard.setAt(coords, currentPlayer.symbol);
      changeState();
      nextPlayer();
      return true;
    }
    return false;
  }

  const changeState = function() {
    // Check if game is over by iterating through each line of 3 cells
    let lines = [ // Rows
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      // Columns
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      // Diagonals
      [[0, 0], [1, 1], [2, 2]],
      [[0, 2], [1, 1], [2, 0]]
    ];

    for (let line of lines) {
      if (Gameboard.isEmpty(line[0])) continue;
      firstSymbol = Gameboard.at(line[0]);
      if (line.every((coords) => Gameboard.at(coords) === firstSymbol)) {
        gameState.winnerSymbol = firstSymbol;
        gameState.winnerLine = line;
        gameState.status = "over";
        return;
      }
    }
    // Increase moves count and check if it's a draw
    ++gameState.movesCount;
    if (gameState.movesCount === 9) {
      gameState.status = "draw";
      return;
    }
  }

  const currentSymbol = () => currentPlayer.symbol;

  return {move, currentSymbol, status, winnerLine, winnerSymbol};
}
