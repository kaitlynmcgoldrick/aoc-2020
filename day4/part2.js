const fs = require("fs");

const parseFile = (file) =>
  fs
    .readFileSync(file, "utf8")
    .split("\n\n")
    .map((s) => {
      return s.split(/[\n| ]+/);
    });

// byr (Birth Year)
// iyr (Issue Year)
// eyr (Expiration Year)
// hgt (Height)
// hcl (Hair Color)
// ecl (Eye Color)
// pid (Passport ID)
// cid (Country ID)

const getNumOfValidPassports = (passportArray) => {
  let numOfValidPassports = 0;
  for (let i = 0; i < passportArray.length; i++) {
    const passport = passportArray[i];
    const counter = {
      byr: 0,
      iyr: 0,
      eyr: 0,
      hgt: 0,
      hcl: 0,
      ecl: 0,
      pid: 0,
    };
    for (let j = 0; j < passport.length; j++) {
      const keyValuePair = passport[j];
      let [key, value] = keyValuePair.split(":");
      if (key === "cid") continue;
      counter[key] += (function (key) {
        switch (key) {
          case "byr":
            return validateBYR(value);
          case "iyr":
            return validateIYR(value);
          case "eyr":
            return validateEYR(value);
          case "hgt":
            return validateHGT(value);
          case "hcl":
            return validateHCL(value);
          case "ecl":
            return validateECL(value);
          case "pid":
            return validatePID(value);
          default:
            return;
        }
      })(key);
    }
    if (Object.values(counter).reduce((a, c) => a + c) === 7) {
      numOfValidPassports++;
    }
  }
  return numOfValidPassports;
};

// TOOLS

const validateBYR = (input) => {
  const int = parseInt(input);
  return int >= 1920 && int <= 2002 ? 1 : 0;
};

const validateIYR = (input) => {
  const int = parseInt(input);
  return int >= 2010 && int <= 2020 ? 1 : 0;
};

const validateEYR = (input) => {
  const int = parseInt(input);
  return int >= 2020 && int <= 2030 ? 1 : 0;
};

const validateHGT = (input) => {
  const cm = input.includes("cm") ? parseInt(input.split("cm")[0]) : null;
  const inches = input.includes("in") ? parseInt(input.split("in")[0]) : null;

  return cm
    ? cm >= 150 && cm <= 193
      ? 1
      : 0
    : 0 || inches
    ? inches >= 59 && inches <= 76
      ? 1
      : 0
    : 0;
};

const validateHCL = (input) => {
  return /^#[a-f|0-9]+$/.test(input) ? 1 : 0;
};

const validateECL = (input) => {
  return /\b(amb|blu|brn|gry|grn|hzl|oth)\b/.test(input) ? 1 : 0;
};

const validatePID = (input) => {
  return /\b[0-9]{9}\b/.test(input) ? 1 : 0;
};

module.exports = {
  getNumOfValidPassports,
  parseFile,
  validateBYR,
  validateIYR,
  validateEYR,
  validateHGT,
  validateHCL,
  validateECL,
  validatePID,
};

const result = getNumOfValidPassports(parseFile("day4/data.txt"));

console.log(result);
