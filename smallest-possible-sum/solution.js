const getMaxIndex = (n) => {
  let maxIndex = 0
  let max = n[0]
  for (let i = 1; i < n.length; i++) {
    if (n[i] > max) {
      maxIndex = i
      max = n[i]
    }
  }

  return maxIndex
}

const smallestPossibleSum = (n) => {
  const maxIndex = getMaxIndex(n)

  let isOver = true
  for (let i = 0; i < n.length; i++) {
    if (i === maxIndex) {
      continue
    }

    if (n[maxIndex] > n[i]) {
      n[maxIndex] = n[maxIndex] - n[i]
      isOver = false
    }
  }

  if (isOver) {
    return n.reduce((sum, item) => sum += item, 0)
  }

  return smallestPossibleSum(n)
}

export default smallestPossibleSum
