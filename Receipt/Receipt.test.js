const readline = require("readline");

jest.mock("readline");

describe("Receipt total calculation", () => {
  let emitLine;

  beforeEach(() => {
    emitLine = jest.fn();
    readline.createInterface.mockReturnValue({
      on: jest.fn((event, callback) => {
        if (event === "line") {
          emitLine = callback; // line 이벤트 콜백을 저장
        }
      }),
      close: jest.fn(),
    });
    console.log = jest.fn(); // console.log 모킹
  });

  it("should output 'Yes' when the total matches the calculated price", () => {
    // given
    const inputLines = [
      "260000", // total
      "4", // Items
      "20000 5", // first item
      "30000 2", // second item
      "10000 6", // third item
      "5000 8", // fourth item
    ];

    // when
    startInputProcessing();
    inputLines.forEach((line) => emitLine(line));

    // then
    expect(console.log).toHaveBeenCalledWith("Yes");
  });

  it("should output 'No' when the total does not match the calculated price", () => {
    // given
    const inputLines = [
      "250000", // total
      "4", // Items
      "20000 5", // first item
      "30000 2", // second item
      "10000 6", // third item
      "5000 8", // fourth item
    ];

    // when
    startInputProcessing();
    inputLines.forEach((line) => emitLine(line));

    // then
    expect(console.log).toHaveBeenCalledWith("No");
  });
});

// 실제로 코드를 실행하기 위해서는 원래의 코드를 함수로 감싸야 합니다.
function startInputProcessing() {
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
}
