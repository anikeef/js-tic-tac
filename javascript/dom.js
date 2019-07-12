const TicTacGUI = (function() {
  const game = TicTacGame(Player("x", "user"), Player("0", "user"));
  const cellsContainer = document.querySelector(".cells");
  const cells = document.querySelectorAll(".cell")
  renderGame();

  cellsContainer.addEventListener("click", (e) => {
    coords = e.target.id.split("").map((n) => Number(n)); // => [int, int]
    game.move(coords);
    console.log(coords);
    renderGame();
  })

  function renderGame() {
    cells.forEach((cell) => {
      coords = cell.id.split("").map((n) => Number(n));
      symbol = Gameboard.at(coords);
      cell.innerHTML = symbol;
    })
  }
})()
