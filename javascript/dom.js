const TicTacGUI = (function() {
  const game = TicTacGame(Player("x", "user"), Player("0", "user"));
  const cellsContainer = document.querySelector(".cells");
  const cells = document.querySelectorAll(".cell")

  // Listen for user moves

  cellsContainer.addEventListener("click", function(e) {
    if (game.status() !== "continue") return;
    coords = cellCoords(e.target);
    e.target.classList.remove("cell-mouseover");
    game.move(coords);
    renderGame();
    switch(game.status()) {
      case "over":
        gameOver();
        break;
      case "draw":
        gameDraw();
        break;
    }
  })

  // These two listeners create the effect of move preview

  cellsContainer.addEventListener("mouseover", (e) => {
    if (game.status() !== "continue") return;
    coords = cellCoords(e.target);
    if (Gameboard.isEmpty(coords)) {
      e.target.classList.add("cell-mouseover");
      e.target.innerHTML = game.currentSymbol();
    }
  })

  cellsContainer.addEventListener("mouseout", (e) => {
    if (game.status() !== "continue") return;
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

  function gameOver() {
    game.winnerLine().forEach((coords) => {
      cell = document.getElementById(coords.join(""));
      cell.classList.add("winner-cell");
    });
  }

  function renderGame() {
    cells.forEach((cell) => {
      coords = cellCoords(cell);
      symbol = Gameboard.at(coords);
      cell.innerHTML = symbol;
    })
  }
})()
