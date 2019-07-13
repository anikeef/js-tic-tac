// The TicTacGame factory function creates objects that provide
// game logic around the GameBoard module. It takes two Player objects
// as parameters and actively uses their methods to make moves

const TicTacGame = function(playerX, player0) {
  let currentPlayer = playerX;

  const nextPlayer = function() {
    currentPlayer = (currentPlayer === playerX) ? player0 : playerX;
  }

  // Waits for current player to input move and changes the state of game

  const move = function(coords) {
    if (Gameboard.isEmpty(coords)) {
      Gameboard.setAt(coords, currentPlayer.symbol);
      nextPlayer();
      if (currentPlayer.isAI) {
        // do stuff
      }
      return true;
    }
    return false;
  }

  const currentSymbol = function() {
    return currentPlayer.symbol;
  }

  const isOver = function() {
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
        return firstSymbol;
      }
    }
    return false;
  }

  return {move, currentSymbol, isOver};
}
