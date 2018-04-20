const romans = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export default roman =>
  roman
    .split('')
    .reduce(
      (sum, n, index, arr) =>
        romans[n] < romans[arr[index + 1]]
          ? (sum -= romans[n])
          : (sum += romans[n]),
      0,
    );
