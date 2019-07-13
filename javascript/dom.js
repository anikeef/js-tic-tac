const TicTacGUI = (function() {
  const game = TicTacGame(Player("x", "user"), Player("0", "user"));
  const cellsContainer = document.querySelector(".cells");
  const cells = document.querySelectorAll(".cell")
  renderGame();

  // Listen for user moves

  cellsContainer.addEventListener("click", (e) => {
    coords = cellCoords(e.target);
    e.target.classList.remove("cell-mouseover");
    game.move(coords);
    renderGame();
    console.log(game.isOver());
  })

  // These two listeners create the effect of move preview

  cellsContainer.addEventListener("mouseover", (e) => {
    coords = cellCoords(e.target);
    if (Gameboard.isEmpty(coords)) {
      e.target.classList.add("cell-mouseover");
      e.target.innerHTML = game.currentSymbol();
    }
  })

  cellsContainer.addEventListener("mouseout", (e) => {
    coords = cellCoords(e.target);
    if (Gameboard.isEmpty(coords)) {
      e.target.classList.remove("cell-mouseover");
      e.target.innerHTML = " ";
    }
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
