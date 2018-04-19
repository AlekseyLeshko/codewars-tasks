export default (x, y) => {
  let a = x.split('').reverse().map(Number);
  let b = y.split('').reverse().map(Number);

  let length;
  let bigArr;
  let secondArr;

  if (a.length > b.length) {
    length = a.length;
    bigArr = a.concat(Array(length - a.length + 0).fill(0));
    secondArr = b;
  } else {
    length = b.length;
    bigArr = b.concat(Array(length - b.length + 1).fill(0));
    secondArr = a;
  }

  for (let i = 0; i < length; i++) {
    bigArr[i] += secondArr[i];
    bigArr[i + 1] += Math.floor(bigArr[i] / 10);
    bigArr[i] %= 10;
  }

  if (bigArr[length] === 0) {
    bigArr.splice(-1, 1);
  }

  return bigArr.reverse().join('');
};
