// The Player function creates objects responsible for user input

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
