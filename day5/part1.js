var fs = require("fs");

const getSeatId = (id) => {
  const idArray = id.split("");
  let front = 0;
  let back = 127;
  let left = 0;
  let right = 7;
  for (let i = 0; i < 7; i++) {
    if (idArray[i] === "F") {
      back = Math.floor((back - front) / 2) + front;
    } else {
      front = Math.floor((back - front) / 2) + front + 1;
    }
  }
  for (let i = 7; i < 10; i++) {
    if (idArray[i] === "L") {
      right = Math.floor((right - left) / 2) + left;
    } else {
      left = Math.floor((right - left) / 2) + left + 1;
    }
  }
  return front * 8 + left;
};

module.exports = getSeatId;

let counter = {
  min: 0,
  max: 864,
};
let highestSeatId = 0;
var array = fs
  .readFileSync("day5/data.txt", "utf8")
  .split("\n")
  .map((id) => {
    const seatId = getSeatId(id);
    return seatId;
  });

const potentialSeats = [];
const sortedArray = array.sort((a, b) => {
  return a - b;
});

for (let i = 0; i < sortedArray.length - 1; i++) {
  if (sortedArray[i] + 1 !== sortedArray[i + 1]) {
    potentialSeats.push(sortedArray[i] + 1);
  }
}
