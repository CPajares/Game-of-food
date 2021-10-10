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

describe("Give an array, and 2 paramatres to function checkCell ", () => {
  test("if receives a matrix 3x3 full of 0, on coordenates [1][1] should return 0", () => {
    const tablero = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    const x = 1;
    const y = 1;
    const expected = 0;

    const result = checkCell(tablero, x, y);

    expect(result).toEqual(expected);
  });

  test("if receives a matrix 5x5 like tablero, coordenates [2][2] should return 1", () => {
    const tablero = [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];
    const x = 2;
    const y = 2;
    const expected = 1;

    const result = checkCell(tablero, x, y);

    expect(result).toEqual(expected);
  });

  test("if receives a matrix 5x5 like tablero, coordenates [0][0] should return 3", () => {
    const tablero = [
      [0, 1, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];
    const x = 0;
    const y = 0;
    const expected = 3;

    const result = checkCell(tablero, x, y);

    expect(result).toEqual(expected);
  });
});

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
