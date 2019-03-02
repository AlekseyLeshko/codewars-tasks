import { describe } from 'ava-spec'
import digitize from './solution'

describe('convert-number-to-reversed-array-of-digits:', it => {
  it('should return answer', t => {
    t.deepEqual(digitize(35231), [1, 3, 2, 5, 3])
  })
})
