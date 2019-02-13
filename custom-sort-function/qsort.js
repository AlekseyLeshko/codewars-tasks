const qsort = (arr) => {
  if (arr.length === 0) {
    return []
  }

  const left = []
  const right = []
  const pivot = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return qsort(left).concat(pivot, qsort(right))
}

export default qsort
