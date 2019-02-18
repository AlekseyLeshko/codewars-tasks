import { describe } from 'ava-spec'
import persistence from './solution'

describe('persistent-bugger:', it => {
  it('should return answer', t => {
    t.is(persistence(4), 0)
    t.is(persistence(39), 3)
    t.is(persistence(999), 4)
  })
})
