var fs = require("fs");

var array = fs
  .readFileSync("day1/data.txt", "utf8")
  .split("\n")
  .map((s) => parseInt(s));

// const array = [1721, 979, 366, 299, 675, 1456];

for (let i = 0; i < array.length; i++) {
  const a = array[i];
  for (let j = i + 1; j < array.length; j++) {
    const b = array[j];
    if (a + b === 2020) {
      console.log(a + "*" + b);
      console.log(a * b);
    } else continue;
  }
}
