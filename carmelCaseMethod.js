/*
    [6kyu]
    
    Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

    Examples (input --> output):
    "hello case" --> "HelloCase"
    "camel case word" --> "CamelCaseWord"
*/

//////solution////////
String.prototype.camelCase = function(){
    //your code here
    return this.split(" ") //split word into an array of two words
               .map(word => word.charAt(0).toUpperCase() + word.slice(1)) //1st char is capitilised and the rest of the word characteers are added back to the array
               .join(""); //join the char array back into a string without spaces
  }


///test cases
// console.log("hello world".camelCase());
let str = 'hello world';
console.log(str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(""));
