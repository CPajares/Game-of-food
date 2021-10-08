const originGame = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];

function transformGame(game) {
  const newGame = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];
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
  if (x - 1 >= 0 && y + 1 <= 4 && game[x - 1][y + 1] === 1) {
    contadorVecinos++;
  }
  if (y - 1 >= 0 && game[x][y - 1] === 1) {
    contadorVecinos++;
  }
  if (y + 1 <= 4 && game[x][y + 1] === 1) {
    contadorVecinos++;
  }
  if (x + 1 <= 4 && y - 1 >= 0 && game[x + 1][y - 1] === 1) {
    contadorVecinos++;
  }
  if (x + 1 <= 4 && game[x + 1][y] === 1) {
    contadorVecinos++;
  }
  if (x + 1 <= 4 && y + 1 <= 4 && game[x + 1][y + 1] === 1) {
    contadorVecinos++;
  }
  return contadorVecinos;
}

let pepe = originGame;
for (let i = 0; i < 10; i++) {
  pepe = transformGame(pepe);
  console.log(pepe);
}
