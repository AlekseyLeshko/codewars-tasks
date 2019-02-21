export default (words) => words
  .split(' ')
  .sort((a, b) => a.match(/\d/) - b.match(/\d/))
  .join(' ')
