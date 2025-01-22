/* 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
PROBLEM!
Given an array of strings, your task is to remove all consecutive duplicate letters from each string in the array.


// Understanding the problem
1. retrieve/store array strings in a variable for manipulation
2. check consecutive duplicate in string variable
3. remove them from the string
4. push the new strings to the array

// Breaking it into sub-problems
1.
// Steps
1.




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

*/

//SOLUTION
const arr = ["abracadabra","allootee","assessee"];
function dupl(arr){
    //store array strings into a string variable
    let str = arr.toString();
    console.log(str);

    //removing the consecutive duplicates by iteration
    let prevChar = '';
    let result ='';

    // Loop through each character in the input string
    for (let i = 0; i < str.length; i++) {

       // get the current character
       let currChar = str[i]; 

       // append unique character
       if (currChar !== prevChar) {
       result += currChar; // Append the current character to result
       }

       // make previous character the current one
       prevChar = currChar;
    }

    // convert the string back into array using split method!
    let newArr = result.split(",");
    console.log(newArr);

    return newArr; // Return the result string with consecutive duplicates removed
  }
//calling the function
const Result = dupl(arr);



