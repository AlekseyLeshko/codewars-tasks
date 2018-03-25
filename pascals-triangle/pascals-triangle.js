export default n => {
  const list = [[1]];
  for (let i = 1; i < n; i++) {
    const row = [1];
    for (let j = 1; j < i; j++) {
      const val = list[i - 1][j - 1] + list[i - 1][j];
      row.push(val);
    }
    row.push(1);
    list.push(row);
  }

  return list.reduce((res, row) => res.concat(row), []);
};
