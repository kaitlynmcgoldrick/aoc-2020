const fs = require("fs");

const getSeatId = require("./part1");

test("Day 5, Part 1", () => {
  expect(getSeatId("FBFBBFFRLR")).toBe(357);
  expect(getSeatId("BFFFBBFRRR")).toBe(567);
  expect(getSeatId("FFFBBBFRRR")).toBe(119);
  expect(getSeatId("BBFFBBFRLL")).toBe(820);
});
