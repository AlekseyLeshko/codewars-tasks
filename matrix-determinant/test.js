import { describe } from 'ava-spec'
import determinant, { getSmallM } from './determinant'

describe('matrix determinant:', it => {
  it('should return the matrix one size smaller', t => {
    const m2 = [[2, 5, 3], [1, -2, -1], [1, 3, 4]]

    t.deepEqual(getSmallM(m2, 0), [[-2, -1], [3, 4]])
    t.deepEqual(getSmallM(m2, 1), [[1, -1], [1, 4]])
    t.deepEqual(getSmallM(m2, 2), [[1, -2], [1, 3]])
  })

  it('should return answer', t => {
    const m1 = [[1, 3], [2, 5]]
    const m2 = [[2, 5, 3], [1, -2, -1], [1, 3, 4]]

    t.deepEqual(determinant([[1]]), 1)
    t.deepEqual(determinant([[-1]]), -1)
    t.deepEqual(determinant(m1), -1)
    t.deepEqual(determinant(m2), -20)
  })
})
