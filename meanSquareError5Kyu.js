const solution = function(firstArray, secondArray) {
  let diffArr = []
  let sum = 0
  let avg = 0
  
  for(let i = 0; i < firstArray.length; i++){
      if(firstArray[i] > secondArray[i]){
          diffArr.push(firstArray[i] - secondArray[i])
      }
      else{
          diffArr.push(secondArray[i] - firstArray[i])
      }
  }
  
  diffArr.map((num) => {
      sum += (num**2)
      avg = sum/(diffArr.length) 
  })
  
  return avg
  
}