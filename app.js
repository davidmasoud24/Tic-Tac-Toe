const board = document.getElementById("board");
let gameState = {
  currentPlayer: "X",

  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
};
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
});

const playerMove = (id) => {
  console.log(id);
  let row = id[0];
  let column = id[2];
  gameState.board[row][column];

  if (gameState.board[row][column] === null) {
    gameState.board[row][column] = gameState.currentPlayer;
  }
  console.log(gameState.board);
};
