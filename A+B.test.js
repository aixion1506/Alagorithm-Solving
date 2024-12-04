// test.js

const { sumNumbers } = require("./A+B");

describe("sumNumbers", () => {
  test("should return the sum of numbers in a single line", () => {
    expect(sumNumbers("1 2 3")).toBe(6);
    expect(sumNumbers("4 5")).toBe(9);
    expect(sumNumbers("10 20 30")).toBe(60);
  });

  test("should handle negative numbers", () => {
    expect(sumNumbers("-1 -2 -3")).toBe(-6);
    expect(sumNumbers("5 -5")).toBe(0);
  });

  test("should handle empty input", () => {
    expect(sumNumbers("")).toBe(0);
  });
});
