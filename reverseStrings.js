/*
    [6-KYU]    
    Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

    Examples:

    "Hey fellow warriors"  --> "Hey wollef sroirraw" 
    "This is a test        --> "This is a test" 
    "This is another test" --> "This is rehtona test"
*/

/////solution///////
function spinWords(string){
    //TODO Have fun :)
    return string.split(" ")
    .map(word => word.length >= 5 ? word.split("").reverse().join("") : word) //reverse words with 5+ characters
    .join(" "); //join the array back into the string
  }


///test case:
console.log(spinWords("Heyyyyyyy fellow warriors"));