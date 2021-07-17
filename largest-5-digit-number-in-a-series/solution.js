export default digits =>
  digits
    .split('')
    .map(Number)
    .reduce((arr, n, index, baseArr) => {
      if (index <= baseArr.length - 5) {
        const substr = baseArr.slice(index, index + 5).join('')

        arr.push(substr)
      }

      return arr
    }, [])
    .map(Number)
    .sort()
    .pop()
