/*
    6 KYU
    Write a function that returns true  / True if every element in an array is an integer or a float with no decimals.

    returns true  / True if array is empty.
    returns false / False for every other input.
*/


/////solution////////
function isIntArray(arr) {
    return Array.isArray(arr) && arr.every(num => Number.isInteger(num));
  }

//calling the functions 
isIntArray([1,2,4,5,7,8,899,5,67,6.44]);