export default (start, swaps) =>
  swaps.reduce(
    (pos, pair) =>
      pair[0] === pos ? pair[1] : pair[1] === pos ? pair[0] : pos,
    start,
  )
