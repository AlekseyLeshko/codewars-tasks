/* eslint-disable no-console */

export default (s) =>
  (new Array(s.length))
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
        const nextNextItem = newItemIsSequence + 1
        let newStep = newItemIsSequence.toString().length
        let newNextStep = nextNextItem.toString().length
        const newItem = Number(s.slice(endIndex, endIndex + newStep))
        const newNextItem = Number(s.slice(endIndex, endIndex + newNextStep))

        step = newStep
        startIndex += item.toString().length

        if (nextNextItem === newNextItem) {
          answer.push(newItemIsSequence)
          step = newNextStep
        } else if (newItemIsSequence !== newItem) {
          isSequence = false
        }
      }
      return (answer.length === 1 && isSequence ? answer[0] : -1)
    })
    .sort((a, b) => b - a)[0]
