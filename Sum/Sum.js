const readline = require("readline");

function calculateSum(n) {
  return (n * (n + 1)) / 2;
}

function startReadline() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("line", (line) => {
    const n = parseInt(line, 10);
    const sum = calculateSum(n);
    console.log(sum);
    rl.close();
  });
}

module.exports = { calculateSum, startReadline };
