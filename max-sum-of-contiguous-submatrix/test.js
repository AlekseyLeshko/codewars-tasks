import { maxSumOf } from './solution'

describe('Find The Max Sum Of Contiguous-Submatrix In a Matrix - Simple Version:', () => {
  it.each([{
    matrix: [
      [1,2,3],
      [4,5,6],
      [7,8,9],
    ],
    expected: 45,
  }, {
    matrix: [
      [-1, -2, -3],
      [ 4,  5,  6],
      [-7, -8, -9],
    ],
    expected: 15,
  }, {
    matrix: [
      [-1,  -2, -3],
      [-4,   5, -6],
      [-7,  -8, -9],
    ],
    expected: 5,
  }, {
    matrix: [
      [0,-2,-7,0],
      [9,2,-6,2],
      [-4,1,-4,1],
      [-1,8,0,-2],
    ],
    expected: 15,
  }])('should check the matrix', ({ matrix, expected }) => {
    expect(maxSumOf(matrix)).toBe(expected)
  })
})
