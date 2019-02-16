import { describe } from 'ava-spec'
import solution from './solution'

describe('Smallest possible sum:', it => {
  it('should return answer', t => {
    t.deepEqual(solution([6]), 6)
    t.deepEqual(solution([6, 9, 21]), 9)
    t.deepEqual(solution([ 1, 21, 55 ]), 3)
    t.deepEqual(solution([60, 12, 96, 48, 60, 24, 72, 36, 72, 72, 48]), 132)
    t.deepEqual(solution([71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71]), 923)
    t.deepEqual(solution([17787, 390963, 83667, 26508, 103788, 293907, 406272, 342732, 578163, 128547, 668352, 99372, 562467, 286443, 27075, 217083, 157323, 43923, 717363, 645888, 307200, 75843, 257547]), 69)
  })
})
