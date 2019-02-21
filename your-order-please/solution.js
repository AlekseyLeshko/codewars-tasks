export default (words) => words.length === 0 ? words : words
  .split(' ')
  .map(word => ({ word, num: Number(/\d/.exec(word)[0]) }))
  .sort((a, b) => a.num - b.num)
  .map(item => item.word)
  .join(' ')
