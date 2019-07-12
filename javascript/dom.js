const DOMStuff = (function() {
  const game = TicTacGame(Player("x", "user"), Player("0", "user"));
  const cellsContainer = document.querySelector(".cells");
  cellsContainer.addEventListener("click", (e) => {
    coords = e.target.id.split("").map((n) => Number(n)); // => [int, int]
    game.move(coords);
  })


})()
