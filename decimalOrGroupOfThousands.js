function sumUpNumbers(arr) {
  let sum = 0;

  for (let str of arr) {
    let numStr = str;
    if (str.includes(",") && str.lastIndexOf(",") > str.lastIndexOf(".")) {
      numStr = numStr.replace(/\./g, "");
      numStr = numStr.replace(",", ".");
    } else {
      numStr = numStr.replace(/,/g, "");
    }

    sum += Number(numStr);
  }
  return sum;
}
