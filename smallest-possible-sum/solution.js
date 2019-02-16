import qsort from './qsort.js'

function difference(max, min) {
  max = max.split('')
    .reverse()
  min = min.split('')
    .reverse()
  var len = max.length,
    result = []
  for (var i = 0, b = 0, c = 0; i < len; i++) {
    b = max[i] - (min[i] || 0) + c
    result[i] = b < 0 ? (c = -1, 10 + b) : (c = 0, b)
  }

  return result.reverse()
    .join('')
    .replace(/^0+/, '')
}

const smallestPossibleSum = (n) => {
  n = qsort(n)

  let isOver = true
  const i = 0
  for (let j = 1; j < n.length; j++) {
    if (n[i] > n[j]) {
      n[i] = +difference(n[i].toString(), n[j].toString())
      isOver = false
    }
  }

  if (isOver) {
    return n.reduce((sum, item) => sum += item, 0)
  }

  return smallestPossibleSum(n)
}

export default smallestPossibleSum
