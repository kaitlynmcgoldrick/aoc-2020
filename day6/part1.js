const fs = require("fs");

const array = fs
  .readFileSync("day6/data.txt", "utf8")
  .split("\n\n")
  .map((s) => {
    return s.split("\n");
  })
  .reduce(
    (acc, curr) =>
      acc + new Set([].concat(...curr.map((s) => s.split("")))).size,
    0
  );

console.log(array);
