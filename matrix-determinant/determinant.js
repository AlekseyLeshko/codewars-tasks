export const getSmallM = (m, index) =>
  (new Array(m.length - 1))
    .fill(1)
    .reduce((arr, _, i) => {
      arr.push(m[i + 1].reduce((acc, item, j) => {
        if (j !== index) acc.push(item)
        return acc
      }, []))
      return arr
    }, [])

const determinant = (m) => {
  if (m.length === 1 && m[0].length === 1) return m[0][0]

  if (m[0].length === 2) return (m[0][0] * m[1][1]) - (m[0][1] * m[1][0])

  return m.reduce((d, item, index) => {
    const smallD = determinant(getSmallM(m, index))
    const currentD = m[0][index] * smallD
    d += (currentD * (index % 2 === 0 ? 1 : -1))
    return d
  }, 0)
}

export default determinant
