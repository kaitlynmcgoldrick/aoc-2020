const fs = require("fs");

const countIfYesInAllArrays = (nestedArray) => {
  if (typeof nestedArray[0] === "string") return nestedArray.length;
  return nestedArray.reduce((acc, curr) => {
    return acc.filter((value) => curr.includes(value));
  }).length;
};

const array = fs
  .readFileSync("day6/data.txt", "utf8")
  .split("\n\n")
  .map((s) => {
    return s.split("\n");
  })
  .reduce((acc, curr, index, array) => {
    const a = countIfYesInAllArrays(curr.map((s) => s.split("")));
    return acc + a;
  }, 0);

console.log(array);

module.exports = countIfYesInAllArrays;
