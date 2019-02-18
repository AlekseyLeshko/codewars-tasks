const persistence = (num) => {
  if (Math.floor(num / 10) === 0) return 0

  return 1 + persistence(num
    .toString()
    .split('')
    .map(Number)
    .reduce((acc, item) => acc *= item, 1))
}

export default persistence
