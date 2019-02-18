export default (str) => {
  const arr = str.split(' ').map(Number).sort((a, b) => b - a)
  const answer = (arr.length === 1 ? arr.concat(arr) : [arr[0], arr[arr.length - 1]])
  return answer.join(' ')
}
