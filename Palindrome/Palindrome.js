function isPalindrome(N) {
  let reverseN = N.split("").reverse().join("");
  return N === reverseN ? 1 : 0;
}

function startReadline() {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim(); // 수정된 부분
  const result = isPalindrome(input);
  console.log(result);
}

if (require.main === module) {
  startReadline();
}

module.exports = { isPalindrome };

/** 예시
 *  echo "level" | nodemon Palindrome
 */
