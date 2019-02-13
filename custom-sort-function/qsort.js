const partition = (arr, left, right) => {
  let i = left, j = right
  const pivot = arr[(left + right) >> 1]

  while (i <= j) {
    while (arr[i] < pivot) i++
    while (arr[j] > pivot) j--

    if (i <= j) {
      const tmp = arr[i]
      arr[i] = arr[j]
      arr[j] = tmp
      i++
      j--
    }
  }

  return i
}

const quickSort = (arr, left, right) => {
  const index = partition(arr, left, right)
  if (left < index - 1)
    quickSort(arr, left, index - 1)
  if (index < right)
    quickSort(arr, index, right)
  return arr
}

export default (arr) => quickSort(arr, 0, arr.length - 1)
