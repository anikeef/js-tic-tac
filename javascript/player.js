// The Player function creates objects responsible for user input

const Player = function(symbol, type) {
  const isAI = function() {
    return type === "AI";
  }
  return {symbol, isAI};
}
