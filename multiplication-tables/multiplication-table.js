export default (row, col) =>
  Array(row)
    .fill()
    .map((r, rIndex) =>
      Array(col)
        .fill()
        .map((c, cIndex) =>
          ((rIndex + 1) * (cIndex + 1))));
