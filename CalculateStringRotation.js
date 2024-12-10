/* 
PROBLEM
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Write a function that receives two strings and returns n, where n 
is equal to the number of characters we should shift the first string forward to match the second.
The check should be case sensitive.

For instance, take the strings "fatigue" and "tiguefa".
In this case, the first string has been rotated 5 characters forward to produce the second string, so 5 would be returned.

If the second string isn't a valid rotation of the first string, the method returns -1.

Examples:
"coffee", "eecoff" => 2
"eecoff", "coffee" => 4
"moose", "Moose" => -1
"isn't", "'tisn" => 2
"Esham", "Esham" => 0
"dog", "god" => -1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

// Understandiong the problem!
////1. A string is a valid rotation of another string if the second string can be obtained by shifting characters of the first string circularly.
////2. For example: "coffee" rotated by 2 positions gives "eecoff", which is a valid rotation.

// Breaking it into sub-problems
////1. Check if both strings are the same length: If not, return -1 immediately since rotations only work on strings of the same length.
////2. Check if the second string is a valid rotation of the first
////3. Find the number of shifts

// Algorithm steps
////1. First, check if both strings are of the same length.
////2. If they are not the same length, return -1.
////3. Concatenate the first string with itself and check if the second string exists within it.
////4. If it exists, return the index of the starting position, which represents the number of shifts.
////5. If not, return -1.


//SOLUTION

function shiftedDiff(first,second) {
    
    //step 1-2
    if (first.length !== second.length) {
        return -1;
    }

    //step 3-4
    let strConc = first + second;
    let indexOfString = strConc.indexOf(second);
    
    //step 5
    if (indexOfString !== -1) {
        return indexOfString;
    } 
    else {
        return -1;
    }
  };


//tests
console.log(shiftedDiff("coffee", "eecoff"));  // 2
console.log(shiftedDiff("eecoff", "coffee"));  // 4
console.log(shiftedDiff("moose", "Moose"));    // -1
console.log(shiftedDiff("isn't", "'tisn"));    // 2
console.log(shiftedDiff("Esham", "Esham"));    // 0
console.log(shiftedDiff("dog", "god"));        // -1
// console.log(indexOfString);
