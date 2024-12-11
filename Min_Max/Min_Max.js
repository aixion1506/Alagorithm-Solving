const readline = require("readline");

let numbers = [];
let rl;

function readlineModule() {
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

function findMinMax(numbers) {
  const min = Math.min(numbers);
  const max = Math.max(numbers);
  return { min, max };
}

function startReadline() {
  readlineModule();

  rl.on("line", (line) => {
    if (numbers.length === 0) {
      const n = parseInt(line, 10);
    } else {
      numbers = line.split(" ").map(Number);

      const { min, max } = findMinMax(numbers);

      console.log(min, max);

      rl.close();
    }
  });
}

module.exports = { findMinMax, startReadline };
