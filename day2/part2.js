var fs = require("fs");

var array = fs
  .readFileSync("day2/data.txt", "utf8")
  .split("\n")
  .map((s) => {
    let [limits, unparsedLetter, password] = s.split(" ");
    let [position1, position2] = limits.split("-");
    let letter = unparsedLetter.replace(":", "");
    return [position1, position2, letter, password];
  });

let numValidPasswords = 0;
for (let i = 0; i < array.length; i++) {
  const [position1, position2, letter, password] = array[i];
  let temp_count = 0;

  if (password.charAt(position1 - 1) === letter) temp_count++;
  if (password.charAt(position2 - 1) === letter) temp_count++;

  if (temp_count === 1) numValidPasswords++;
}

console.log(numValidPasswords);
