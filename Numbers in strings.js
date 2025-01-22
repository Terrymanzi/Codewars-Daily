/*
Description:
In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

Good luck!
*/

//////////////SOLUTION/////////////////

function solve(input){
    //regex matching
    let numbers = input.match(/[0-9]+/g);

    //find the largest number
    let largestNumber = Math.max(...numbers.map(Number));

    return largestNumber;
}

//CHECKER
console.log(solve("gh12cdy695m1")); // Output: 695







