// test.js

/**
 * 2nd test
 */
// const { sumNumbers } = require("./A+B");

// describe("sumNumbers", () => {
//   test("should return the sum of numbers in a single line", () => {
//     expect(sumNumbers("1 2 3")).toBe(6);
//     expect(sumNumbers("4 5")).toBe(9);
//     expect(sumNumbers("10 20 30")).toBe(60);
//   });

//   test("should handle negative numbers", () => {
//     expect(sumNumbers("-1 -2 -3")).toBe(-6);
//     expect(sumNumbers("5 -5")).toBe(0);
//   });

//   test("should handle empty input", () => {
//     expect(sumNumbers("")).toBe(0);
//   });
// });

/**
 * 3, 4nd test
 */
const { spawn } = require("child_process");

describe("A+B function", () => {
  test("should correctly sum A and B for multiple test cases", (done) => {
    const child = spawn("node", ["A+B.js"]);

    // 테스트할 입력 데이터
    const testInput = `5
1 2
3 4
5 6
7 8
9 10
`;

    // 입력을 child process에 전달
    child.stdin.write(testInput);
    child.stdin.end(); // 입력 종료

    // 출력 결과를 수집
    let output = "";
    child.stdout.on("data", (data) => {
      output += data.toString();
    });

    // 프로세스 종료 후 결과 확인
    child.on("close", () => {
      const expectedOutput = "3\n7\n11\n15\n19\n"; // 예상 출력값
      expect(output).toBe(expectedOutput);
      done(); // 테스트 완료
    });
  });
});
