import { describe } from 'ava-spec'
import solution from './solution'

describe('Smallest possible sum:', it => {
  it('should return answer', t => {
    t.deepEqual(solution([6]), 6)
    t.deepEqual(solution([6, 9, 21]), 9)
    t.deepEqual(solution([ 1, 21, 55 ]), 3)
    t.deepEqual(solution([60, 12, 96, 48, 60, 24, 72, 36, 72, 72, 48]), 132)
    t.deepEqual(solution([71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71]), 923)
  })
})
