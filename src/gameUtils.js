export const scoreRound = (previousWall, newWall, deductions) => {
  let roundScore = 0;
  previousWall.forEach((row, rowIndex) => {
    row.forEach((tile, tileIndex) => {
      if (newWall[rowIndex][tileIndex] !== tile) {
        let currentWall = [];
        for (var i = 0; i < 5; i++) {
          if (i <= rowIndex) {
            currentWall.push(newWall[i]);
          } else {
            currentWall.push(previousWall[i]);
          }
        }
        roundScore += scoreForPlacedTile(rowIndex, tileIndex, currentWall);
      }
    });
  });

  return roundScore - deductions;
};

export const bonusesForGame = (finalWall) => {
  let bonuses = 0;
  //check horizontal
  finalWall.forEach((row) => {
    if (row.reduce((hasBonus, tile) => hasBonus && tile)) {
      bonuses = bonuses + 2;
    }
  });
  // check vertical
  for (var i = 0; i < 5; i++) {
    let columnHasBonus = false;
    for (var j = 0; j < 5; j++) {
      if (finalWall[j][i]) {
        columnHasBonus = true;
      } else {
        columnHasBonus = false;
        break;
      }
    }
    if (columnHasBonus) {
      bonuses += 7;
    }
  }
  // check diag
  for (var k = 0; k < 5; k++) {
    let currentColor = finalWall[0][k];
    let currentRow = 0;
    let currentCol = k;
    let diagonalHasBonus;
    let seenCount = 0;
    while (currentColor) {
      if (currentColor === false) {
        diagonalHasBonus = false;
        break;
      }
      if (seenCount > 5) {
        diagonalHasBonus = true;
        break;
      }
      seenCount += 1;
      let nextCoords = previousColorIndicies(currentRow, currentCol);
      currentRow = nextCoords.newRowIndex;
      currentCol = nextCoords.newColIndex;
      currentColor = finalWall[currentRow][currentCol];
    }
    if (diagonalHasBonus) {
      bonuses += 10;
    }
  }

  return bonuses;
};

const previousColorIndicies = (row, col) => {
  let newRowIndex;
  let newColIndex;
  if (row === 0) {
    newRowIndex = 4;
  } else {
    newRowIndex = row - 1;
  }
  if (col === 0) {
    newColIndex = 4;
  } else {
    newColIndex = col - 1;
  }

  return { newRowIndex, newColIndex };
};

const scoreForPlacedTile = (rowIndex, tileIndex, wall) => {
  let score = 0;
  let rightIndex = tileIndex + 1;
  let right = wall[rowIndex][rightIndex];
  let leftIndex = tileIndex - 1;
  let left = wall[rowIndex][leftIndex];
  let upIndex = rowIndex - 1;
  let up = wall[upIndex] != null ? wall[upIndex][tileIndex] : false;
  let downIndex = rowIndex + 1;
  let down = wall[downIndex] != null ? wall[downIndex][tileIndex] : false;

  if (right || left) {
    score = score + 1;
  }

  if (up || down) {
    score = score + 1;
  }

  while (right) {
    score = score + 1;
    rightIndex = rightIndex + 1;
    right = wall[rowIndex][rightIndex];
  }

  while (left) {
    score = score + 1;
    leftIndex = leftIndex - 1;
    left = wall[rowIndex][leftIndex];
  }

  while (up) {
    score = score + 1;
    upIndex = upIndex - 1;
    up = wall[upIndex] != null ? wall[upIndex][tileIndex] : false;
  }

  while (down) {
    score = score + 1;
    downIndex = downIndex + 1;
    down = wall[downIndex] != null ? wall[downIndex][tileIndex] : false;
  }

  return score === 0 ? 1 : score;
};
