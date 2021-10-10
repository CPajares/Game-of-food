function transformGame(game) {
  const newGame = [[], [], []];
  for (let i = 0; i < 3; i++) {
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
        vecinos = 0;
      }
    }
    return newGame;
  }
}

function checkCell(game, x, y) {
  let contadorVecinos = 0;
  if (x - 1 >= 0 && y - 1 >= 0 && game[x - 1][y - 1] === 1) {
    contadorVecinos++;
  }
  if (x - 1 >= 0 && game[x - 1][y] === 1) {
    contadorVecinos++;
  }
  if (x - 1 >= 0 && y + 1 <= 5 - 1 && game[x - 1][y + 1] === 1) {
    contadorVecinos++;
  }
  if (y - 1 >= 0 && game[x][y - 1] === 1) {
    contadorVecinos++;
  }
  if (y + 1 <= 5 - 1 && game[x][y + 1] === 1) {
    contadorVecinos++;
  }
  if (x + 1 <= 5 - 1 && y - 1 >= 0 && game[x + 1][y - 1] === 1) {
    contadorVecinos++;
  }
  if (x + 1 <= 5 - 1 && game[x + 1][y] === 1) {
    contadorVecinos++;
  }
  if (x + 1 <= 5 - 1 && y + 1 <= 5 - 1 && game[x + 1][y + 1] === 1) {
    contadorVecinos++;
  }
  return contadorVecinos;
}

describe("descr", () => {
  test("desc", () => {
    const tablero = [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ];
    const expected = [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ];

    const result = transformGame(tablero);

    expect(result).toEqual(expected);
  });
});
