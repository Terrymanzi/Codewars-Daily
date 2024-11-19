/*
Task:
Write a function lettersOnOddIndexes that takes a string as an argument and
returns a string containing all the word characters (letters and numbers) located at odd indexes in the original string.
 The function should exclude any special characters.
*/


let i;
let result = "";

function lettersOnOddIndexes(str){
    for (i = 0; i < str.length; i++){
        if(i%0 !== 0){
            if(/[a-zA-Z0-9]/.test(str[i])){
                result += str[i];
            }
        }
    }
    return "\n" + result;
}

console.log(
lettersOnOddIndexes("Hello, World!"), // "elWrd"
lettersOnOddIndexes("JavaScript!"), // "aacit"
lettersOnOddIndexes("TypeScript"), // "yecit"
)
