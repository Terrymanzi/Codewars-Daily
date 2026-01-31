function findInArray(array, iterator) {
  //   let iterator = function(value, index) { return (value % 2 === 0) };
  // findInArray([1,3,5,6,7], trueIfEven) // should === 3

  for (let i of array) {
    iterator(i);
    if (iterator) {
      return array.firstIndexOf(i);
    } else -1;
  }

  return iterator;
}
