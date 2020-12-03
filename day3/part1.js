var fs = require("fs");

var array = fs
  .readFileSync("day3/data.txt", "utf8")
  .split("\n")
  .map((s) => s.split(""));

const width = array[0].length;
let numOfTrees = 0;

for (let i = 1; i < array.length; i++) {
  const position = (3 * i) % width;
  if (array[i][position] === "#") numOfTrees++;
}

console.log(numOfTrees);
