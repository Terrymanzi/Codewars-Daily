function stepDown(start, width) {
  if (width === 0) return [];

  function walk(current, result) {
    if (current < 0) return result;
    result.push(current);
    return walk(current - width, result);
  }
  return walk(start, []).reverse();
}
