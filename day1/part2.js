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
    const c = a + b;
    if (c > 2020) continue;
    for (let k = j + 1; k < array.length; k++) {
      d = array[k];
      if (c + d === 2020) {
        console.log(a + "+" + b + "+" + d);
        console.log(a * b * d);
      } else continue;
    }
  }
}
