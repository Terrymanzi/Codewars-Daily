// link="https://www.codewars.com/kata/5263c6999e0f40dee200059d/train/javascript"

const adj = {
  0: ["0", "8"],
  1: ["1", "2", "4"],
  2: ["1", "2", "3", "5"],
  3: ["2", "3", "6"],
  4: ["1", "4", "5", "7"],
  5: ["2", "4", "5", "6", "8"],
  6: ["3", "5", "6", "9"],
  7: ["4", "7", "8"],
  8: ["5", "7", "8", "9", "0"],
  9: ["6", "8", "9"],
};

function getPINs(observed) {
  // TODO: This is your job, detective!
  let result = [""];

  for (let digit of observed) {
    const possibilities = adj[digit];
    const next = [];

    for (let prefix of result) {
      for (let d of possibilities) {
        next.push(prefix + d);
      }
    }

    result = next;
  }

  return result;
}
