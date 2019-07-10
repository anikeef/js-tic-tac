// The TicTacGame factory function creates objects that provide
// game logic around the GameBoard module. It takes two Player objects
// as parameters and actively uses their methods to make moves

const TicTacGame = function(playerX, player0) {
  let currentPlayer = playerX;

  const nextPlayer = function() {
    currentPlayer = (currentPlayer === playerX) ? player0 : playerX;
  }

  // Waits for current player to input move and changes the state of game
  
  const move = function() {
    let coords = currentPlayer.inputMove();
    // coords here checks that input is valid
    if (coords && Gameboard.isEmpty(coords)) {
      Gameboard.setAt(coords, currentPlayer.symbol);
      nextPlayer();
      return true;
    }
    return false;
  }

  return {move};
}
