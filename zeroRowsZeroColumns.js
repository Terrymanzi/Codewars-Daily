// link = "https://www.codewars.com/kata/584425e1101928a1bc00003b/train/javascript"
function countZeroRowsAndColumns(arr1, arr2) {
  const rows = arr1.length;
  const cols = arr1[0].length;

  const rowZero = new Array(rows).fill(true);
  const colZero = new Array(cols).fill(true);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (arr1[i][j] + arr2[i][j] !== 0) {
        rowZero[i] = false;
        colZero[j] = false;
      }
    }
  }

  const zeroRows = rowZero.filter(Boolean).length;
  const zeroCols = colZero.filter(Boolean).length;

  return zeroRows;
}

// refactoring logic
