import { describe } from 'ava-spec'
import hamming from './solution'

describe('hamming-numbers:', it => {
  it('should return answer', t => {
    t.deepEqual(hamming(1), 1)
    t.deepEqual(hamming(2), 2)
    t.deepEqual(hamming(6), 6)
    t.deepEqual(hamming(7), 8)
    t.deepEqual(hamming(8), 9)
    t.deepEqual(hamming(10), 12)
    t.deepEqual(hamming(19), 32)
  })
})
