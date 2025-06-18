function sortAnimal(animals) {
  let sort = animals.slice()
//   console.log('original')
//   console.log(animals)
  if(!animals || animals.length === 0){
    return [];
  }
  else{
    return sort.sort((a, b)=>{
      if(a.numberOfLegs !== b.numberOfLegs){
        return a.numberOfLegs - b.numberOfLegs
      }
      else{
        return a.name.localeCompare(b.name)
      }
    })
  }
}
