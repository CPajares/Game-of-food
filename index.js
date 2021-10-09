let tablero = createBoard(20);
const boardHTML = document.getElementsByClassName("board");
const column = document.getElementsByClassName("board__column");

function transformGame(game) {
  const newGame = createBoard(game.length);
  for (let i = 0; i < game.length; i++) {
    for (let j = 0; j < game[i].length; j++) {
      let vecinos = checkCell(game, i, j);
      if (game[i][j] === 1) {
        if (vecinos === 2 || vecinos === 3) {
          newGame[i][j] = 1;
        } else {
          newGame[i][j] = 0;
        }
      } else if (game[i][j] === 0) {
        if (vecinos === 3) {
          newGame[i][j] = 1;
        } else {
          newGame[i][j] = 0;
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
      tablero[i][j] = Math.round(Math.random());
    }
  }
  return tablero;
}

function createDivs() {
  console.log(boardHTML);
  for (let i = 0; i < tablero.length; i++) {
    const newDivColumn = document.createElement("div");

    newDivColumn.className = "board__column";

    boardHTML[0].appendChild(newDivColumn);
  }
  for (let i = 0; i < tablero.length; i++) {
    for (let j = 0; j < tablero.length; j++) {
      const newDivCell = document.createElement("div");
      newDivCell.className = "board__cell";
      console.log(i, j);
      column[i].appendChild(newDivCell);
    }
  }
}

createDivs();
setInterval(() => {
  tablero = transformGame(tablero);
  console.table(tablero);
}, 1000);
