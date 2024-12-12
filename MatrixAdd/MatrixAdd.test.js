const { startReadline } = require("./MatrixAdd"); // 수정한 파일 경로에 맞게 수정

describe("Matrix Addition Input Parsing", () => {
  test("should parse N, M and matrices A and B correctly", () => {
    const input = `3 3
1 1 1
2 2 2
0 1 0
3 3 3
4 4 4
5 5 100`;

    const { A, B } = startReadline(input);

    expect(A).toEqual([
      [1, 1, 1],
      [2, 2, 2],
      [0, 1, 0],
    ]);
    expect(B).toEqual([
      [3, 3, 3],
      [4, 4, 4],
      [5, 5, 100],
    ]);
  });
});
