import qsort from './qsort.js'

const smallestPossibleSum = (n) => {
  n = qsort(n)
  const [i, j] = [...new Set(n)]
    .slice(0, 2)
    .map(item => n.indexOf(item))

  if (n[i] > n[j]) {
    n[i] = n[i] - n[j]
    return smallestPossibleSum(n)
  }

  return n.reduce((sum, item) => sum += item, 0)
}

export default smallestPossibleSum
