var fs = require("fs");

var array = fs
  .readFileSync("day4/data.txt", "utf8")
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
      counter[key]++;
    }
    if (Object.values(counter).reduce((a, c) => a + c) === 7) {
      numOfValidPassports++;
    }
  }
  return numOfValidPassports;
};

const result = getNumOfValidPassports(array);

console.log(result);
