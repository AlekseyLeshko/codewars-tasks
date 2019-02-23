export default (arr) => {
  let answer = -1

  arr
    .reduce((leftSum, leftItem, leftIndex) => {
      if (answer !== -1) {
        return leftSum
      }

      let rightSum = 0
      for (let i = leftIndex + 1; i < arr.length; i++) {
        rightSum += arr[i]
      }

      if (leftSum === rightSum) {
        answer = leftIndex
      }

      return leftSum += leftItem
    }, 0)

  return answer
}
