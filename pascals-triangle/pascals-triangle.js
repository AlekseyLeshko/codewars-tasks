export default n => {
  const list = [[1]];
  for (let i = 1; i < n; i++) {
    const row = [
      1,
      ...[...Array(i - 1)].map(
        (num, index) => list[i - 1][index] + list[i - 1][index + 1],
      ),
      1,
    ];
    list.push(row);
  }

  return list.reduce((res, row) => res.concat(row), []);
};
