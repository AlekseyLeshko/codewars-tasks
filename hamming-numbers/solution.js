export default (n) => {
  const arr = (new Array(n)).fill(1);
  let k2 = 0, k3 = 0, k5 = 0;

  for (let j = 1; j < n; j++) {
    const x2 = arr[k2] * 2;
    const x3 = arr[k3] * 3;
    const x5 = arr[k5] * 5;

    if (x2 <= x3 && x2 <= x5) {
      arr[j] = x2;
      k2++;
    }
    if (x3 <= x2 && x3 <= x5) {
      arr[j] = x3;
      k3++;
    }
    if (x5 <= x2 && x5 <= x3) {
      arr[j] = x5;
      k5++;
    }
  }

  return arr[n - 1];
};
