const fs = require("fs");

const countIfYesInAllArrays = require("./part2");

test("Day 6, Part 2", () => {
  expect(countIfYesInAllArrays(["a", "b", "c"])).toBe(3);
  expect(countIfYesInAllArrays([["a"], ["b"], ["c"]])).toBe(0);
  expect(
    countIfYesInAllArrays([
      ["a", "b"],
      ["a", "c"],
    ])
  ).toBe(1);
  expect(countIfYesInAllArrays([["a"], ["a"], ["a"], ["a"]])).toBe(1);
  expect(countIfYesInAllArrays(["b"])).toBe(1);
});
