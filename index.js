let tablero = [];
const boardHTML = document.getElementsByClassName("board");
const column = document.getElementsByClassName("board__column");
const tamañoHTML = document.getElementById("tamaño");

function transformGame(game) {
  const newGame = createBoard(game.length);
  for (let i = 0; i < game.length; i++) {
    for (let j = 0; j < game[i].length; j++) {
      let vecinos = checkCell(game, i, j);
      if (game[i][j] === 1) {
        if (vecinos === 2 || vecinos === 3) {
          newGame[i][j] = 1;
          document.getElementById(`${i}-${j}`).style.background = "hotpink";
        } else {
          newGame[i][j] = 0;
          document.getElementById(`${i}-${j}`).style.background = "grey";
        }
      } else if (game[i][j] === 0) {
        if (vecinos === 3) {
          newGame[i][j] = 1;
          document.getElementById(`${i}-${j}`).style.background = "hotpink";
        } else {
          newGame[i][j] = 0;
          document.getElementById(`${i}-${j}`).style.background = "grey";
        }
      }
      vecinos = 0;
    }
  }
  return newGame;
}

function checkCell(game, x, y) {
  let contadorVecinos = null;
  if (x - 1 >= 0 && y - 1 >= 0 && game[x - 1][y - 1] === 1) {
    contadorVecinos++;
  }
  if (x - 1 >= 0 && game[x - 1][y] === 1) {
    contadorVecinos++;
  }
  if (x - 1 >= 0 && y + 1 <= tablero.length - 1 && game[x - 1][y + 1] === 1) {
    contadorVecinos++;
  }
  if (y - 1 >= 0 && game[x][y - 1] === 1) {
    contadorVecinos++;
  }
  if (y + 1 <= tablero.length - 1 && game[x][y + 1] === 1) {
    contadorVecinos++;
  }
  if (x + 1 <= tablero.length - 1 && y - 1 >= 0 && game[x + 1][y - 1] === 1) {
    contadorVecinos++;
  }
  if (x + 1 <= tablero.length - 1 && game[x + 1][y] === 1) {
    contadorVecinos++;
  }
  if (
    x + 1 <= tablero.length - 1 &&
    y + 1 <= tablero.length - 1 &&
    game[x + 1][y + 1] === 1
  ) {
    contadorVecinos++;
  }
  return contadorVecinos;
}

function createBoard(tamaño) {
  const tablero = [];
  for (let i = 0; i < tamaño; i++) {
    tablero.push([]);
    tablero[i].length = tamaño;
  }
  for (let i = 0; i < tamaño; i++) {
    for (let j = 0; j < tamaño; j++) {
      tablero[i][j] = 0;
    }
  }
  return tablero;
}

function createDivs() {
  const newBoard = document.createElement("div");
  newBoard.className = "board__new-board";
  for (let i = 0; i < tablero.length; i++) {
    const newDivColumn = document.createElement("div");
    newDivColumn.className = "board__column";
    boardHTML[0].appendChild(newBoard);
    newBoard.appendChild(newDivColumn);
  }
  for (let i = 0; i < tablero.length; i++) {
    for (let j = 0; j < tablero.length; j++) {
      const newDivCell = document.createElement("div");
      newDivCell.className = `board__cell `;
      newDivCell.id = `${i}-${j}`;
      newDivCell.style.background = "grey";
      newDivCell.onclick = changeCell;

      column[i].appendChild(newDivCell);
    }
  }
}

function changeCell() {
  const index = this.id.split("-");
  const row = index[0];
  const file = index[1];

  if (this.style.background === "grey") {
    this.style.background = "hotpink";
    tablero[row][file] = 1;
  } else {
    this.style.background = "grey";
    tablero[row][file] = 0;
  }
  console.table(tablero);
}

function create() {
  if (deletedBoard() === false) {
    document.getElementsByClassName("board__new-board")[0].remove();
  }
  let valueNumber = Number(tamañoHTML.value);
  if (valueNumber < 5 || valueNumber > 20 || valueNumber === NaN) {
    tamañoHTML.value = "Valor entre 5 y 20.";
    valueNumber = 0;
    return;
  }
  tablero = createBoard(valueNumber);
  createDivs(valueNumber);
}

function deletedBoard() {
  if (document.getElementsByClassName("board__new-board")[0] !== undefined) {
    return false;
  }
  return true;
}
function bucle() {
  setInterval(() => {
    tablero = transformGame(tablero);
    console.table(tablero);
  }, 1000);
}
