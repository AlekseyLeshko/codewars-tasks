const getMinVal = (n) => {
  const [i, j] = n.sort((a, b) => a - b)
  if (isNaN(j % i)) {
    return j
  }

  return getMinVal([j - i, i])
}

const solution = (n) => {
  if (n.length === 1) return n[0]

  const minVal = getMinVal(n)
  return (new Array(n.length))
    .fill(minVal)
    .reduce((sum, item) => sum += item, 0)
}

export default solution
