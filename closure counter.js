/*
Closure Counter Challenge!
-------------------------
Define the function counter that returns a function that returns an increasing value.
The first value should be 1.
You're going to have to use closures.

Example:
const newCounter = counter();
newCounter() // 1
newCounter() // 2
*/

//solution
function counter(){
    let x=0;
    return function(){
      x +=1;
      return x;
    };
  }
  
  const result = counter();
  console.log(result) // output 1
  console.log(result) // output 2