const qsort = (arr) => {
  if (arr.length === 0) {
    return []
  }

  if (arr.length === 1) {
    return arr
  }

  const left = []
  const right = []
  const pivot = arr[Math.ceil(arr.length / 2)]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === pivot) {
      continue
    }
    if(arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return qsort(left).concat(pivot, qsort(right))
}

export default qsort
