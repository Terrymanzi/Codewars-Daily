// link = "https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript"
function getMiddle(s) {
  //Code goes here!
  let result = s.split("");
  if (result.length % 2 === 0) {
    console.log("even");
    return `${result[Math.floor(result.length / 2 - 1)]} ${result[Math.floor(result.length / 2)]}`.replace(
      /\s/g,
      "",
    );
  } else {
    return `${result[Math.floor(result.length / 2)]}`.replace(/\s/g, "");
  }
}
