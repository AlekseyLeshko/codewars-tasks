const helperFun = (multiplier) =>
  (data) =>
    (key) => multiplier * data.arr[data[key]]

const x2 = helperFun(2)
const x3 = helperFun(3)
const x5 = helperFun(5)

const updateIndex = (res) =>
  (min) =>
    (data) =>
      (key) => res === min ? data[key]++ : undefined

export default (n) =>
  (new Array(n - 1))
    .fill(0)
    .reduce((data) => {
      const iRes = x2(data)('i')
      const jRes = x3(data)('j')
      const kRes = x5(data)('k')

      const min = Math.min(iRes, jRes, kRes)
      updateIndex(iRes)(min)(data)('i')
      updateIndex(jRes)(min)(data)('j')
      updateIndex(kRes)(min)(data)('k')

      data.arr.push(min)
      return data
    }, { arr: [1], i: 0, j: 0, k: 0 })
    .arr.pop()
