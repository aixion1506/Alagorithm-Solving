const readline = require("readline");

let rl;
let N, M;
let A = [];
let B = [];
let currentLine = 0;

function readlineModule() {
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

function startReadline() {
  readlineModule();

  rl.on("line", (line) => {
    if (currentLine === 0) {
      [N, M] = line.split(" ").map(Number);
      console.log("N, M", N, M);
    } else if (currentLine < N + 1) {
      A.push(line.split(" ").map(Number));
    } else if (currentLine < 2 * N + 1) {
      B.push(line.split(" ").map(Number));
    }
    currentLine++;

    if (currentLine === 2 * N + 1) {
      console.log("행렬 A:", A);
      console.log("행렬 B:", B);
      addMatrix();
      rl.close();
    }
  });
}

function addMatrix() {
  const sumMatrix = A.map((row, i) => row.map((value, j) => value + B[i][j]));
  console.log("행렬 C (A + B):");
  for (const row of sumMatrix) {
    console.log(row.join(" "));
  }
}

startReadline();

module.exports = { startReadline };
