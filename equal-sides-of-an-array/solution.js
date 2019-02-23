export default (arr) =>
  arr
    .reduce((data, item, index) => {
      if (data.answer !== -1) return data

      let rightSum = data.rightSum - (data.leftSum + item)

      if (data.leftSum === rightSum) data.answer = index

      data.leftSum += item
      return data
    }, {
      leftSum: 0,
      answer: -1,
      rightSum: arr.reduce((acc, item) => acc += item, 0),
    })
    .answer
