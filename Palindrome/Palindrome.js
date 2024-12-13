const readline = require("readline");

function isPalindrome(N) {
  let reverseN = N.split("").reverse().join("");
  return N === reverseN ? 1 : 0;
}

function startReadline() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("line", (line) => {
    const N = line.trim();
    const result = isPalindrome(N);
    console.log(result);
    rl.close();
  });
}

startReadline();

module.exports = { startReadline, isPalindrome };
