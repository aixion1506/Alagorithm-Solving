const { findMinMax } = require("./Min_Max");

describe("findMinMax", () => {
  test("주어진 숫자 배열의 최솟값과 최댓값을 찾는다", () => {
    expect(findMinMax([20, 10, 35, 30, 7])).toEqual({ min: 7, max: 35 });
    expect(findMinMax([-5, -1, -10, -20])).toEqual({ min: -20, max: -1 });
    expect(findMinMax([1, 2, 3, 4, 5])).toEqual({ min: 1, max: 5 });
    expect(findMinMax([1000000, -1000000, 0])).toEqual({
      min: -1000000,
      max: 1000000,
    });
  });
});
