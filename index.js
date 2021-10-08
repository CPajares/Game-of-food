let tablero = crearTablero(8);

function transformGame(game) {
  const newGame = crearTablero(game.length);
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

function crearTablero(tamaño) {
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

setInterval(() => {
  tablero = transformGame(tablero);
  console.table(tablero);
}, 1000);
