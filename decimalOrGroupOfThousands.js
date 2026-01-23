function sumUpNumbers(arr) {
  let newArr = [];

  for (let item of arr) {
    let hasComma = item.includes(",");
    let hasDot = item.includes(".");

    // case 1: both separators
    if (hasComma && hasDot) {
      if (item.lastIndexOf(".") > item.lastIndexOf(",")) {
        // US
        newArr.push(Number(item.replace(/,/g, "")));
      } else {
        // EU
        newArr.push(Number(item.replace(/\./g, "").replace(/,/g, ".")));
      }
    }

    // case 2: only comma
    else if (hasComma) {
      const commaCount = item.split(",").length - 1;
      let value;
      if (commaCount > 1) {
        value = item.replace(/,/g, "");
      } else {
        value = item.replace(",", ".");
      }
      newArr.push(Number(value));
    }

    // case 3: plain number or dot decimal
    else {
      newArr.push(Number(item));
    }
  }

  let sum = newArr.reduce((accumulator, current) => accumulator + current, 0);

  return sum.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
