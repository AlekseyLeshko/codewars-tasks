export default (matrix) => {
  const newM = matrix.map(arr => [...arr])
  for (let i = 0; i < matrix.length >> 1; i++) {
    const index = matrix.length - (1 + i)
    newM[i][i] = matrix[index][index]
    newM[i][index] = matrix[index][i]

    newM[index][i] = matrix[i][index]
    newM[index][index] = matrix[i][i]
  }

  return newM
}
