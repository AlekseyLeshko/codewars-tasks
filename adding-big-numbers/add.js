export default (x, y) => {
  const length = x.length > y.length ? x.length : y.length;
  let a = getArr(x, length);
  let b = getArr(y, length);

  for (let i = 0; i < length; i++) {
    b[i] += a[i];
    b[i + 1] += Math.floor(b[i] / 10);
    b[i] %= 10;
  }

  if (b[length] === 0) {
    b.splice(-1, 1);
  }

  return b.reverse().join('');
};

const getArr = (arr, l) =>
  arr
    .split('')
    .reverse()
    .map(Number)
    .concat(Array(l - arr.length + 1).fill(0));
