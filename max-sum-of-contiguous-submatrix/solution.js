export const maxSumOf = (matrix) =>
  getAllSubMatrixs(matrix)
    .map(getMatrixSum)
    .sort((a, b) => b - a)[0]

const getAllSubMatrixs = (matrix) =>
  getArray({ length: matrix.length }).reduce((m, _, rowIndex) => ([
    ...m,
    ...getArray({ length: matrix.length }).reduce((ms, _, columnIndex) => ([
      ...ms,
      ...getSubMatrixsByCell(matrix, rowIndex, columnIndex),
    ]), []),
  ]), [])

const getSubMatrixsByCell = (matrix, i, j) =>
  getArray({ length: matrix.length - i })
    .reduce((matrixs, _, iIndex) => {
      return [
        ...matrixs,
        ...getArray({ length: matrix.length - j })
          .map((_, jIndex) => getSubMatrix(matrix, i, j, i + iIndex, j + jIndex)),
      ]
    }, [])

const getSubMatrix = (matrix, i, j, iMax, jMax) =>
  getArray({ length: iMax - i + 1 })
    .reduce((subMatrix, _, rowIndex) => ([
      ...subMatrix,
      getArray({ length: jMax - j + 1 }).reduce((row, _, columnIndex) => ([ ...row, matrix[i + rowIndex][j + columnIndex]]), []),
    ]), [])

const getMatrixSum = (matrix) =>
  matrix.reduce((acc, row) => acc + row.reduce((rowSum, rowItem) => rowSum + rowItem, 0), 0)

const getArray = ({ length }) => (new Array(length)).fill(undefined)
