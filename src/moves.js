const initialWall = [
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
];
const moveOne = [
  [false, false, false, false, false],
  [false, true, false, false, false],
  [false, false, false, false, false],
  [false, false, true, false, false],
  [false, false, false, false, false],
];
const moveTwo = [
  [false, false, false, false, false],
  [false, true, true, false, false],
  [false, false, false, false, false],
  [false, false, true, false, false],
  [false, false, false, false, false],
];
const moveThree = [
  [false, false, false, false, false],
  [false, true, true, false, false],
  [false, false, true, false, false],
  [false, false, true, false, false],
  [false, false, false, false, false],
];
const moveFour = [
  [false, false, false, false, false],
  [false, true, true, true, false],
  [false, false, true, true, false],
  [false, false, true, false, false],
  [false, false, false, false, false],
];
const moveFive = [
  [false, false, false, false, false],
  [false, true, true, true, false],
  [false, false, true, true, false],
  [false, false, true, false, true],
  [false, false, false, false, false],
];
const moveSix = [
  [false, false, true, false, false],
  [false, true, true, true, false],
  [false, false, true, true, false],
  [false, false, true, false, true],
  [false, false, true, false, false],
];
const moveSeven = [
  [true, false, true, false, false],
  [false, true, true, true, false],
  [false, false, true, true, false],
  [false, false, true, true, true],
  [false, false, true, false, false],
];
const moveEight = [
  [true, false, true, false, false],
  [false, true, true, true, false],
  [false, false, true, true, false],
  [false, false, true, true, true],
  [false, false, true, false, true],
];
export const alternateEnding = [
  [true, true, true, true, true],
  [false, true, true, true, true],
  [true, false, true, true, false],
  [false, true, true, true, true],
  [false, false, true, false, true],
];
// [2, 0], [3, 1], [4, 2], [0, 3], [1, 4]
export const moves = [
  initialWall,
  moveOne,
  moveTwo,
  moveThree,
  moveFour,
  moveFive,
  moveSix,
  moveSeven,
  moveEight,
];
