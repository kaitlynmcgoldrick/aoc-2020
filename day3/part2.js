var fs = require("fs");

var array = fs
  .readFileSync("day3/data.txt", "utf8")
  .split("\n")
  .map((s) => s.split(""));

const width = array[0].length;

const getNumOfTrees = (array, width, right, down) => {
  let numOfTrees = 0;
  for (let i = down; i < array.length; i += down) {
    const position = (right * (i / down)) % width;
    if (array[i][position] === "#") numOfTrees++;
  }
  return numOfTrees;
};

module.exports = getNumOfTrees;

const a = getNumOfTrees(array, width, 1, 1);
const b = getNumOfTrees(array, width, 3, 1);
const c = getNumOfTrees(array, width, 5, 1);
const d = getNumOfTrees(array, width, 7, 1);
const e = getNumOfTrees(array, width, 1, 2);

console.log(a * b * c * d * e);
