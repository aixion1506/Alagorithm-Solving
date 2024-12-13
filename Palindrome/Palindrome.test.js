// palindrome.test.js
const { isPalindrome } = require("./Palindrome.js");

describe("isPalindrome", () => {
  test("returns 1 for 'level'", () => {
    expect(isPalindrome("level")).toBe(1);
  });

  test("returns 1 for 'racecar'", () => {
    expect(isPalindrome("racecar")).toBe(1);
  });

  test("returns 0 for 'hello'", () => {
    expect(isPalindrome("hello")).toBe(0);
  });

  test("returns 1 for an empty string", () => {
    expect(isPalindrome("")).toBe(1);
  });

  test("returns 1 for 'A man a plan a canal Panama'", () => {
    const input = "A man a plan a canal Panama"
      .replace(/[^A-Za-z]/g, "")
      .toLowerCase();
    expect(isPalindrome(input)).toBe(1);
  });
});
