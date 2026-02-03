// link: "https://www.codewars.com/kata/57ea70aa5500adfe8a000110/train/javascript/697b5878128ff92dc4d9050d"

function foldArray(array, runs) {
  let result = [];
  //folding loop
  for (let i = 0; i < runs; i++) {
    let half1 = [];
    let half2 = [];
    //find mid point index
    let midIndex = Math.floor(array.length / 2);
    half1 = array.splice(midIndex, array.length - 1).reverse();
    half2 = array.splice(0, midIndex);
    console.log(half1);
    console.log(half2);
    result = half1.map((value, index) => value + half2[index]);
  }
  console.log(result);
}

foldArray([1, 2, 3, 4, 5, 6], 1);
