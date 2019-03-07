export default (s) =>
  (new Array(6))
    .fill(0)
    .map((_, count) => {
      let answer = []
      let isSequence = true
      let startIndex = 0
      let step = count + 1
      while (startIndex < s.length - step) {
        const endIndex = startIndex + step
        const item = Number(s.slice(startIndex, endIndex))
        const newItemIsSequence = item + 1
        const newStep = newItemIsSequence.toString().length
        const newItem = Number(s.slice(endIndex, endIndex + newStep))

        if (newItemIsSequence + 1 === newItem) {
          answer.push(newItemIsSequence)
        } else if (newItemIsSequence !== newItem) {
          isSequence = false
        }

        step = newStep
        startIndex += item.toString().length
      }

      return (answer.length === 1 && isSequence ? answer[0] : -1)
    })
    .sort((a, b) => b - a)[0]
