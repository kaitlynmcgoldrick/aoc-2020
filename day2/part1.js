var fs = require("fs");

var array = fs
  .readFileSync("day2/data.txt", "utf8")
  .split("\n")
  .map((s) => {
    let [limits, unparsedLetter, password] = s.split(" ");
    let [lowLimit, highLimit] = limits.split("-");
    let letter = unparsedLetter.replace(":", "");
    return [lowLimit, highLimit, letter, password];
  });

let numValidPasswords = 0;
for (let i = 0; i < array.length; i++) {
  const [lowLimit, highLimit, letter, password] = array[i];
  let temp_count = 0;
  for (const c of password) {
    if (c === letter) temp_count++;
  }

  if (temp_count >= lowLimit && temp_count <= highLimit) numValidPasswords++;
}

console.log(numValidPasswords);
