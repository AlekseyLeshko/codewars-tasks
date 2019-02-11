import descendingOrder from './solution'
import { describe } from 'ava-spec'

describe('descending order:', it => {
  it('should return answer', t => {
    t.deepEqual(descendingOrder(0), 0)
    t.deepEqual(descendingOrder(1), 1)
    t.deepEqual(descendingOrder(123456789), 987654321)
  })
})
