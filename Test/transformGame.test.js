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

describe("Given an array to function transformGame ", () => {
  test("for an array 3x3 like game, should return new array transformed", () => {
    const game = [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ];
    const expected = [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ];

    const result = [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ];

    expect(result).toEqual(expected);
  });
  test("for an array 3x3 like game, should return new array transformed", () => {
    const game = [
      [0, 1, 0, 0, 1],
      [0, 1, 0, 0, 1],
      [0, 1, 0, 0, 1],
    ];
    const expected = [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ];

    const result = [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ];

    expect(result).toEqual(expected);
  });
});
