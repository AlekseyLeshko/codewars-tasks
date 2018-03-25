export default function(n, p) {
  const sum = n
    .toString()
    .split('')
    .reduce((sum, char, index) => {
      const power = p + index;
      const num = parseInt(char, 10);
      return sum += Math.pow(num, power);
    }, 0);

  const k = sum / n;

  return Number.isInteger(k) ? k : -1;
}

