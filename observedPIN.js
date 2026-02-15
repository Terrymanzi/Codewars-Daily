// link="https://www.codewars.com/kata/5263c6999e0f40dee200059d/train/javascript"

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
