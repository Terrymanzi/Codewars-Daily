function foldArray(array, runs) {
  let output = [];
  for (let i = 0; i <= runs; i++) {
    output = array.toSpliced(i, array.lenght / 2);
  }
  return ([0], output);
}
