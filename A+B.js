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

/** 두번째 도전 */
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];

rl.on("line", (line) => {
  inputLines.push(line);
});

rl.on("close", () => {
  inputLines.forEach((line) => {
    const numbers = line.split(" ").map(Number);
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    console.log(sum);
  });
});

/**
 * 원인분석
 * - input을 line단위로 던져서 Close때 로직을 돌리는 식으로 하려 했는데 시간 초과가 뜸..
 * - 일단 테스트 코드 도입해봐야겠다...
 */
