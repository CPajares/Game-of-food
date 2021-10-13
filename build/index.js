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
          document.getElementById(
            `${i}-${j}`
          ).style.background = `url("img/pizza.png") 0% 0% / cover no-repeat`;
        } else {
          newGame[i][j] = 0;
          document.getElementById(
            `${i}-${j}`
          ).style.background = `url("img/brocoli.png") 0% 0% / cover no-repeat`;
        }
      } else if (game[i][j] === 0) {
        if (vecinos === 3) {
          newGame[i][j] = 1;
          document.getElementById(
            `${i}-${j}`
          ).style.background = `url("img/pizza.png") 0% 0% / cover no-repeat`;
        } else {
          newGame[i][j] = 0;
          document.getElementById(
            `${i}-${j}`
          ).style.background = `url("img/brocoli.png") 0% 0% / cover no-repeat`;
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
      newDivCell.style.background = `url("img/brocoli.png") 0% 0% / cover no-repeat`;
      newDivCell.onclick = changeCell;

      column[i].appendChild(newDivCell);
    }
  }
}

function changeCell() {
  const index = this.id.split("-");
  const row = index[0];
  const file = index[1];
  if (
    this.style.background === `url("img/brocoli.png") 0% 0% / cover no-repeat`
  ) {
    this.style.background = 'url("img/pizza.png") 0% 0% / cover no-repeat';
    tablero[row][file] = 1;
  } else if (
    this.style.background === 'url("img/pizza.png") 0% 0% / cover no-repeat'
  ) {
    this.style.background = 'url("img/brocoli.png") 0% 0% / cover no-repeat';
    tablero[row][file] = 0;
  }
}

function create() {
  if (deletedBoard() === false) {
    document.getElementsByClassName("board__new-board")[0].remove();
  }
  let valueNumber = Number(tamañoHTML.value);
  if (valueNumber < 5 || valueNumber > 18 || valueNumber === NaN) {
    tamañoHTML.value = "min:5 - max:18";
    valueNumber = 0;
    return;
  }
  tablero = createBoard(valueNumber);
  createDivs(valueNumber);
  stop();
}

function deletedBoard() {
  if (document.getElementsByClassName("board__new-board")[0] !== undefined) {
    return false;
  }
  return true;
}

let Itinerar = null;

function bucle() {
  clearInterval(Itinerar);
  Itinerar = setInterval(() => {
    tablero = transformGame(tablero);
  }, 1000);
}

function stop() {
  clearInterval(Itinerar);
}

function clearBoard() {
  clearInterval(Itinerar);
  create();
}
