/** 시간초과로 실패 **/
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.on("line", (line) => {
//   const numbers = line.split(" ").map(Number);

//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log("Sum:", sum);
// });

// rl.on("close", () => {});

/**
 * 원인 분석
 * - 백준에서 계속 input을 주지만 제대로 close가 원활히 이루어 지지 않아서 시간 초과 된걸로 예상
 */

/**
 * 2nd
 */
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let inputLines = [];

// rl.on("line", (line) => {
//   inputLines.push(line);
// });

// rl.on("close", () => {
//   inputLines.forEach((line) => {
//     const numbers = line.split(" ").map(Number);
//     const sum = numbers.reduce((acc, num) => acc + num, 0);
//     console.log(sum);
//   });
// });
/**
 * 원인분석
 * - input을 line단위로 던져서 Close때 로직을 돌리는 식으로 하려 했는데 시간 초과가 뜸..
 * - 일단 테스트 코드 도입해봐야겠다...
 */

/**
 * 3nd
 */
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function sumNumbers(input) {
//   const numbers = input.split(" ").map(Number);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// }

// rl.on("line", (line) => {
//   const result = sumNumbers(line);
//   console.log(result);
// });

// module.exports = { sumNumbers };
/**
 * 원인 분석
 * - 현재 구조적으로 readline 인터페이스의 종료가 문제가 있음
 * - 입력 받을 수 있는 상태가 지속되어 문제가 발생
 */

/**
 * 4nd
 */
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];
let T;

// 첫 번째 줄에서 테스트 케이스의 개수 T를 읽습니다.
rl.on("line", (line) => {
  if (T === undefined) {
    T = parseInt(line);
  } else {
    inputLines.push(line);
    if (inputLines.length === T) {
      // 모든 입력을 받았으면, 결과를 계산하고 출력합니다.
      const results = inputLines.map((line) => {
        const [A, B] = line.split(" ").map(Number);
        return A + B;
      });
      console.log(results.join("\n")); // 결과를 한 번에 출력합니다.
      rl.close(); // 입력 스트림을 닫습니다.
    }
  }
});
