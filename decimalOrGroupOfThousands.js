function sumUpNumbers(arr) {
  // your code here
  let newArr = [];
  for (let item of arr) {
    //detect separator format
    if (item[item.length - 3] === ".") {
      console.log("US");
      console.log(item);

      //normalize separators
      let newItem = item.replace(/,/g, "");
      console.log(newItem);
      newArr.push(Number(newItem));
    } else {
      console.log("UK");
      console.log(item);

      //normaliza separators
      let newItem = item.replace(/\./g, "").replace(/,/g, ".");
      console.log(newItem);
      newArr.push(Number(newItem));
    }
  }
  console.log(newArr);
  let sum = newArr.reduce((accumulator, current) => {
    return accumulator + current;
  });

  console.log(sum);
  return sum.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
