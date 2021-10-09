const { checkCell } = require("./index");

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
