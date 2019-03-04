import { describe } from 'ava-spec'
import reverseOnDiagonals from './solution'

describe('simple-fun-number-59-reverse-on-diagonals:', it => {
  it('should return answer', t => {
    t.deepEqual(reverseOnDiagonals([[1,2,3], [4,5,6], [7,8,9]]),[[9,2,7], [4,5,6], [3,8,1]])
    t.deepEqual(reverseOnDiagonals([[239]]), [[239]])
    t.deepEqual(reverseOnDiagonals([[1,10], [100,1000]]), [[1000,100], [10,1]])
    t.deepEqual(reverseOnDiagonals([[43,455,32,103],  [102,988,298,981],  [309,21,53,64],  [2,22,35,291]]),[[291,455,32,2],  [102,53,21,981],  [309,298,988,64], [103,22,35,43]])

  })
})
