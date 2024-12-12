function twosDifference(input){
    //Enter your solution here
     input.sort((a,b) => a-b);
     let result=[];
     for(let i = 0; i <= input.length; i++){
       for(let j=i+1; j<input.length; j++){
         if(input[j]-input[i] === 2){
           result.push(input[i],input[j]);
         }
       }
     }
     return result
   }