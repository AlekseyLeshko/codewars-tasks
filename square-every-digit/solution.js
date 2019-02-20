export default (num) =>
  Number(`${num}`.split('').map(item => Math.pow(item, 2)).join(''))
