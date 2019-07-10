// The Gameboard module provides a data structure for storing game state
// It doesn't include any buisness logic and doesn't check for moves validity

const Gameboard = (function() {

  // Each of three arrays corresponds to one column from left to right.
  // Cells in each array are numerated from bottom to top. This order
  // allows to access cells via Cartesian coordinate system (e. g board[x][y])

  const board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
  ];

  const setAt = function(coords, symbol) {
    x = coords[0];
    y = coords[1];
    if (x > 3 || y > 3) return false;
    board[x][y] = symbol;
  }

  const at = function(coords) {
    x = coords[0];
    y = coords[1];
    if (x > 3 || y > 3) return false;
    return board[x][y];
  }

  const isEmpty = function(coords) {
    return at(coords) === " ";
  }

  return {setAt, at, isEmpty};
})();

// The TicTacGame factory function creates objects that provide
// game logic around the GameBoard module. It takes two Player objects
// as parameters and actively uses their methods to make moves

const TicTacGame = function(playerX, player0) {
  let currentPlayer = playerX;

  const nextPlayer = function() {
    currentPlayer = (currentPlayer === playerX) ? player0 : playerX;
  }

  const move = function() {
    let coords = currentPlayer.inputMove();
    if (Gameboard.isEmpty(coords)) {
      Gameboard.setAt(coords, currentPlayer.symbol)
    }
    nextPlayer();
  }

  return {move};
}

const Player = function(symbol) {

  // !!!Temporary version
  const inputMove = function() {
    input = prompt("Enter your move (e.g. 00 - left bottom cell):");
    if ((/^\d{2}$/).test(input)) {
      return input.split("").map((n) => Number(n));
    }
    return false;
  }

  return {inputMove, symbol};
}

let game = TicTacGame(Player("x"), Player("0"));
