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

  const set_at = function(x, y, symbol) {
    board[x][y] = symbol;
  }

  const at = function(x, y) {
    return board[x][y];
  }
})();
