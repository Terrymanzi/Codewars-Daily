/*
    6 KYU
    -----
    Write a function that takes a string of braces, and determines if the order of the braces is valid. 
    It should return true if the string is valid, and false if it's invalid.

    All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

    What is considered Valid?
    A string of braces is considered valid if all braces are matched with the correct brace.

    Examples
    "(){}[]"   =>  True
    "([{}])"   =>  True
    "(}"       =>  False
    "[(])"     =>  False
    "[({})](]" =>  False
*/


/////////solution/////////

function validBraces(braces){
    //TODO
  let array = [];
  let closingBraceMapObj = { ']': '[', '}': '{', ')': '(' };
  //console.log("open braces map obj:");
  //console.log(closingBraceMapObj);
  //console.log("\n");
    
  //looping through the input
  for(let char of braces){
      // console.log(char);
      if( char === '(' || char === '[' || char === '{' ){
          //push opening braces into the array
          array.push(char);
      }
      else if( array.length === 0 || array.pop() !== closingBraceMapObj[char]){
          //console.log("false");
          return false;
          }
  }
  
  /////////////////////////////////////////////////
  //console.log("array of opening braces:");
  //console.log(array);
  return array.length === 0; // to ensure all braces are matched and the stack is empty
  }

console.log(validBraces("(){}[]"));  // true
console.log(validBraces("([{}])"));  // true
console.log(validBraces("(}"));      // false
console.log(validBraces("[(])"));    // false
console.log(validBraces("[({})](]")); // false
console.log(validBraces("(((({{"));   // false



