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
