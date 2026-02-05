// link: "https://www.codewars.com/kata/51f082ba7297b8f07f000001/train/javascript/697b588976e3cdf4dcc9e0fb"

/*
We'll create a function that takes in two parameters:

a sequence (length and types of items are irrelevant)
a function (value, index) that will be called on members of the sequence and their index. The function will return either true or false.
Your function will iterate through the members of the sequence in order until the provided function returns true; at which point your function will return that item's index.

If the function given returns false for all members of the sequence, your function should return -1.

//////////////////////////////////////////////////////////////////////////////
var trueIfEven = function(value, index) { return (value % 2 === 0) };
findInArray([1,3,5,6,7], trueIfEven) // should === 3


// TESTS
const assert = require('chai').assert;

describe("Tests", () => {
  it("test", () => {
    let trueIfEven = function(v, i) { return v % 2 === 0; }
    let neverTrue = function(v, i) { return false; }
    let trueIfValueEqualsIndex = function(v, i) { return v === i; }
    let trueIfLengthEqualsIndex = function(v, i) { return v.length === i; }

    assert.strictEqual(findInArray([], trueIfEven) , -1);
    assert.strictEqual(findInArray([1,3,5,6,7], trueIfEven) , 3);
    assert.strictEqual(findInArray([2,4,6,8], trueIfEven) , 0);
    assert.strictEqual(findInArray([2,4,6,8], neverTrue) , -1);
    assert.strictEqual(findInArray([13,5,3,1,4,5], trueIfValueEqualsIndex) , 4);
    assert.strictEqual(findInArray(["one","two","three","four","five","six"], trueIfLengthEqualsIndex) , 4);
    assert.strictEqual(findInArray(["bc","af","d","e"], trueIfLengthEqualsIndex) , -1);
  });
});

 */

// Solution
function findInArray(array, iterator) {
  let index = array.findIndex(
    (value, index) => iterator(value, index) === true,
  );
  if (index !== undefined) {
    return index;
  } else {
    array.every((value, index) => iterator(value, index) === false);
    return -1;
  }
}
// iterator function definition
let trueIfEven = function (value, index) {
  return value % 2 === 0;
};

//sample tests
// console.log(findInArray([], trueIfEven)); //ouput: -1
console.log(findInArray([1, 3, 5, 6, 7], trueIfEven)); //ouput: 3
