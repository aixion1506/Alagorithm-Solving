const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let total = 0;
let Items = 0;
let ItemsPrice = 0;
let count = 0;

rl.on("line", (line) => {
  if (count === 0) total = parseInt(line, 10);
  else if (count === 1) Items = parseInt(line, 10);
  else {
    const [price, quantity] = line.split(" ").map(Number);
    ItemsPrice += price * quantity;
  }
  count++;

  if (count === Items + 2) {
    console.log(ItemsPrice === total ? "Yes" : "No");
    rl.close();
  }
});
