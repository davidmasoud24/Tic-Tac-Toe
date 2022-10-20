window.addEventListener("DOMContentLoaded", () => {
  const resetButton = document.querySelector(".reset");

  const board = document.getElementById("board");
  let gameState = {
    currentPlayer: "X",
    otherPlayer: "O",
    gameTurn: true,
    gameWin: false,
    gameDraw: false,
    isGameActive: true,

    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
  };
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [0, 4, 8],
    [2, 5, 8],
    [2, 4, 6],
  ];

  const makeGameBoard = () => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.id = `${i},${j}`;
        board.appendChild(cell);
      }
    }
  };
  makeGameBoard();
  board.addEventListener("click", (event) => {
    playerMove(event.target.id);
    checkWin();
    renderBoard();
    displayWinner();
  });

  const renderBoard = () => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const cell = document.getElementById(`${i},${j}`);
        cell.innerText = gameState.board[i][j];
      }
    }
  };
  const playerMove = (id) => {
    console.log(id);
    let row = id[0];
    let column = id[2];
    gameState.board[row][column];

    if (gameState.board[row][column] === null) {
      gameState.board[row][column] = gameState.currentPlayer;
      switchPlayers();
    }
  };

  const switchPlayers = () => {
    if (gameState.currentPlayer === "X") {
      gameState.currentPlayer = "O";
    } else {
      gameState.currentPlayer = "X";
    }
  };
  const displayWinner = () => {};
  function checkWin() {
    for (let i = 0; i < winningConditions.length; i++) {
      const winCondition = winningConditions[i];
      const a = board[winCondition[0]];
      const b = board[winCondition[1]];
      const c = board[winCondition[2]];
      if (a === null || b === null || c === null) {
        continue;
      }
      if (a === b && b === c) {
        gameState.gameWin = true;
        break;
      }
    }
  }

  const resetBoard = () => {
    board = [null, null, null, null, null, null, null, null, null];
    isGameActive = true;
    announcer.classList.add("hide");

    if (currentPlayer === "O") {
      otherPlayer();
    }

    cells.forEach((cell) => {
      cell.innerText = "";
      cell.classList.remove("playerX");
      cell.classList.remove("playerO");
    });
  };

  cells.forEach((cell, index) => {
    cell.addEventListener("click", () => userAction(cell, index));
  });

  restartButton.addEventListener("click", resetBoard);
});
console.log(gameState.board);
