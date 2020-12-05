const {
  getNumOfValidPassports,
  parseFile,
  validateBYR,
  validateIYR,
  validateEYR,
  validateHGT,
  validateHCL,
  validateECL,
  validatePID,
} = require("./part2");

test("Day 4, Part 2", () => {
  expect(validateBYR(2002)).toBe(1);
  expect(validateBYR(2003)).toBe(0);

  expect(validateHGT("60in")).toBe(1);
  expect(validateHGT("190cm")).toBe(1);
  expect(validateHGT("190in")).toBe(0);
  expect(validateHGT("190")).toBe(0);

  expect(validateHCL("#123abc")).toBe(1);
  expect(validateHCL("#123abz")).toBe(0);
  expect(validateHCL("123abc")).toBe(0);

  expect(validateECL("brn")).toBe(1);
  expect(validateECL("wat")).toBe(0);

  expect(validatePID("000000001")).toBe(1);
  expect(validatePID("0123456789")).toBe(0);
  expect(validatePID("896056539")).toBe(1);

  896056539;

  const result = getNumOfValidPassports(parseFile("day4/test.txt"));
  expect(result).toBe(4);
});
