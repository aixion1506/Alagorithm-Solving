const { isPalindrome } = require("./palindrome"); // 경로를 수정하세요

describe("Palindrome Test Cases", () => {
  test("should return 1 for a palindrome word 'level'", () => {
    expect(isPalindrome("level")).toBe(1);
  });

  test("should return 0 for a non-palindrome word 'baekjoon'", () => {
    expect(isPalindrome("baekjoon")).toBe(0);
  });

  test("should return 1 for a single character 'a'", () => {
    expect(isPalindrome("a")).toBe(1);
  });

  test("should return 1 for a palindrome word with even length 'abba'", () => {
    expect(isPalindrome("abba")).toBe(1);
  });

  test("should return 0 for a non-palindrome word 'hello'", () => {
    expect(isPalindrome("hello")).toBe(0);
  });

  test("should return 1 for a palindrome word with odd length 'racecar'", () => {
    expect(isPalindrome("racecar")).toBe(1);
  });

  test("should return 0 for a longer non-palindrome word 'abcdefgh'", () => {
    expect(isPalindrome("abcdefgh")).toBe(0);
  });
});
