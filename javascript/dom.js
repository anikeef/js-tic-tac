const TicTacGUI = (function() {
  const game = TicTacGame(Player("x", "user"), Player("0", "user"));
  const cellsContainer = document.querySelector(".cells");
  const cells = document.querySelectorAll(".cell")
  renderGame();

  // Listen for user moves

  cellsContainer.addEventListener("click", (e) => {
    coords = cellCoords(e.target); // => [int, int]
    game.move(coords);
    console.log(coords);
    renderGame();
  })

  // Return coords array of given DOM element (e.g. [0, 0])

  function cellCoords(element) {
    return element.id.split("").map((n) => Number(n));
  }

  function renderGame() {
    cells.forEach((cell) => {
      coords = cellCoords(cell);
      symbol = Gameboard.at(coords);
      cell.innerHTML = symbol;
    })
  }
})()
