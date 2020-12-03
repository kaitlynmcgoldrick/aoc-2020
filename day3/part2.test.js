const fs = require("fs");

const getNumOfTrees = require("./part2");

var array = fs
  .readFileSync("day3/test.txt", "utf8")
  .split("\n")
  .map((s) => s.split(""));

const width = array[0].length;

test("Day 3, Part 2", () => {
  expect(getNumOfTrees(array, width, 1, 1)).toBe(2);
  expect(getNumOfTrees(array, width, 3, 1)).toBe(7);
  expect(getNumOfTrees(array, width, 5, 1)).toBe(3);
  expect(getNumOfTrees(array, width, 7, 1)).toBe(4);
  expect(getNumOfTrees(array, width, 1, 2)).toBe(2);
});
