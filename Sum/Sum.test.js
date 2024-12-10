const { calculateSum } = require("./Sum");

test("1부터 n까지의 합", () => {
  expect(calculateSum(1)).toBe(1);
  expect(calculateSum(2)).toBe(3);
  expect(calculateSum(3)).toBe(6);
  expect(calculateSum(4)).toBe(10);
  expect(calculateSum(5)).toBe(15);
  expect(calculateSum(10)).toBe(55);
});
