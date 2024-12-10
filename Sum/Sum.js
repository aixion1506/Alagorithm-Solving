const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const n = parseInt(line, 10);
  const sum = (n * (n + 1)) / 2;
  console.log(sum);
  rl.close();
});
