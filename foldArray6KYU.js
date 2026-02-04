// link: "https://www.codewars.com/kata/57ea70aa5500adfe8a000110/train/javascript/697b5878128ff92dc4d9050d"

// solution 1
// function foldArray(array, runs) {
//   let result = [];
//   //folding loop
//   for (let i = 0; i < runs; i++) {
//     if (i === 0) {
//       source = array;
//     } else {
//       source = result;
//     }
//     let half1 = [];
//     let half2 = [];
//     //find mid point index
//     let midIndex = Math.floor(source.length / 2);
//     half1 = source.slice(midIndex + 1, source.length).reverse();
//     half2 = source.slice(0, midIndex);
//     result = half1.map((value, index) => value + half2[index]);
//     if (source.length % 2 !== 0) result.push(source[midIndex]);
//     console.log(half1);
//     console.log(half2);
//   }
//   console.log(result);
//   return result;
// }

// solution 2
function foldArray(array, runs) {
  let result = array.slice(); // copying input
  console.log(result);

  for (let r = 0; r < runs; r++) {
    let folded = [];
    let len = result.length;

    //core logic calc sum from both sides!
    for (let i = 0; i < Math.floor(len / 2); i++) {
      folded[i] = result[i] + result[len - 1 - i];
      console.log(folded);
    }

    // if odd length, keep the middle element
    if (len % 2 !== 0) {
      folded.push(result[Math.floor(len / 2)]);
    }

    result = folded;
  }

  console.log("answer:", result);
  return result;
}

foldArray([1, 2, 3, 4, 5, 6], 1);
