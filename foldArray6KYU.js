// link: "https://www.codewars.com/kata/57ea70aa5500adfe8a000110/train/javascript/697b5878128ff92dc4d9050d"

// solution 1
function foldArray(array, runs) {
  let result = [];

  for (let i = 0; i < runs; i++) {
    let source = i === 0 ? array : result;

    let midIndex = Math.floor(source.length / 2);

    let half1 = source.slice(midIndex).reverse();
    let half2 = source.slice(0, midIndex);

    result = half2.map((value, index) => value + half1[index]);

    if (source.length % 2 !== 0) {
      result.push(half1[half1.length - 1]);
    }
    console.log(result);
  }
  console.log("answer", result);

  return result;
}

// solution 2
// function foldArray(array, runs) {
//   let result = array.slice(); // copying input
//   console.log(result);

//   for (let r = 0; r < runs; r++) {
//     let folded = [];
//     let len = result.length;

//     //core logic calc sum from both sides!
//     for (let i = 0; i < Math.floor(len / 2); i++) {
//       folded[i] = result[i] + result[len - 1 - i];
//       console.log(folded);
//     }

//     // if odd length, keep the middle element
//     if (len % 2 !== 0) {
//       folded.push(result[Math.floor(len / 2)]);
//     }

//     result = folded;
//   }

//   console.log("answer:", result);
//   return result;
// }

foldArray([1, 2, 3, 4, 5, 6], 1);
