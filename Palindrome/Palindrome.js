const readline = require("readline");

let rl;
let N;

function readlineModule() {
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

function isPalindrome(N) {
  let reverseN = N.split("").reverse().join("");
  console.log("reverseN", reverseN);

  return N === reverseN ? 1 : 0;
}

function startReadline() {
  readlineModule();

  rl.on("line", (line) => {
    N = line;
    console.log("result", N);
    const result = isPalindrome(N);
    console.log(result);

    rl.close();
  });
}

module.exports = { startReadline, isPalindrome };

if (require.main === module) {
  startReadline();
}
