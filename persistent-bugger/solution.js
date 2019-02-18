const persistence = (num) =>
  `${num}`.length === 1 ? 0 : 1 + persistence(`${num}`.split('').map(Number).reduce((acc, item) => acc *= item, 1))

export default persistence
