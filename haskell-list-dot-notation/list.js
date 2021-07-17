const isRange = (str) => str.includes('..')

export default (options = { generator: ''  }) => {
  let generator = options.generator || ''
  generator = generator.trim()
  if (!generator.length) {
    return []
  }

  return generator.split(',')
    .reduce((acc, str, index, sourceArr) => {
      if (isRange(str)) {
        const arr = str.split('..')

        const end = Number.parseInt(arr[1], 10)
        const start = Number.parseInt(arr[0], 10)
        const step = sourceArr[index - 1] ? (start - Number.parseInt(sourceArr[index - 1], 10)) : 1
        let count = 0

        if (end >= start && step === 1) {
          count = end - start + 1
        } else if (end >= start && step > 1) {
          count = end === start ? 1 : Math.ceil((end - start) / step)
        } else if (end <= start && step < 1) {
          count = Math.abs(Math.ceil((end - start) / step)) + 1
        }

        acc = acc.concat(Array(count)
          .fill(start)
          .map((_, index) => start + (index * step)))
        return acc
      }

      acc.push(Number.parseInt(str, 10))
      return acc
    }, [])
}
