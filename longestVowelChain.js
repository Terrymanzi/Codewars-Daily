// Link="https://www.codewars.com/kata/59c5f4e9d751df43cf000035/javascript"

function solve(s) {
  console.log(s);
  return Math.max(...s.match(/[aeiou]+/g).map((vowelSize) => vowelSize.length));
}
