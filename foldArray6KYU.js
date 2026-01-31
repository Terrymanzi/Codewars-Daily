function foldArray(array, runs) {
  let output = [];
  for (let i = 0; i <= runs; i++) {
    console.log(array[i]);
    // output = array.toSpliced(i, array.lenght / 2);
    output.push(array[i]);
  }
  console.log(output);
  return ([0], output);
}

foldArray([1, 2, 3, 4, 5, 6], 2);
