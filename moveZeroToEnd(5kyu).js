function moveZeros(arr) {
  console.log(arr)
  let result = []
  let count = 0
  //counting zeros in arr
  for(item of arr){
    if(item === 0){
      count++
    }
    else{
      result.push(item)
    }
  }
  //adding back zeros to result
  for(let i=0; i < count; i++){
    result.push(0)
  }
  console.log(result)
  
  return result
}