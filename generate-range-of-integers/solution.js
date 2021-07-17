export default (min, max, step) =>
  [min].concat(new Array(Math.floor((max - min) / step))
    .fill()
    .map((_, index) => (min + (step * (index + 1)))))
