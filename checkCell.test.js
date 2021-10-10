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
  test("if receives ", () => {
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
});
