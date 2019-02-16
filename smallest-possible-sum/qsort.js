const qsort = (arr) => {
  if (arr.length === 0) return []
  if (arr.length === 1) return arr

  const medium = arr.length >> 1
  const pivot = arr[medium]

  const { left, right } = arr.reduce((data, item, index) => {
    if (index === medium) return data
    item > pivot ? data.left.push(item) : data.right.push(item)
    return data
  }, {
    left: [],
    right: [],
  })

  return qsort(left).concat(pivot, qsort(right))
}

export default qsort
