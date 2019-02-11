export default (n) =>
  Number(String(n).split('').sort().reverse().join(''))
