const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const numbers = line.split(" ").map(Number);

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log("Sum:", sum);
});

rl.on("close", () => {});

// 시간초과로 실패
